// c:\Projetos\Workana\Sexshop\aryelleproject\src\services\sheet.ts

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export const getStockFromSheet = async () => {
  // Verifica se as credenciais existem
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
    console.warn("⚠️ Credenciais do Google Sheets não configuradas.");
    return [];
  }

  try {
    // Configura a autenticação
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Carrega a planilha
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    
    // Pega a primeira aba
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    // Retorna os dados mapeados
    return rows.map((row) => ({
      id: Number(row.get('id')),
      stock: Number(row.get('estoque')),
    }));
  } catch (error) {
    console.error("Erro ao acessar planilha:", error);
    return [];
  }
};
