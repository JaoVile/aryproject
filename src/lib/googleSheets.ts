import { google } from "googleapis";
import { Product, products as staticProducts } from "@/constants/products";
import fs from "fs";
import path from "path";

export async function getProductsFromSheet(): Promise<Product[]> {
  try {
    const missingVars = [];
    if (!process.env.GOOGLE_SHEET_ID) missingVars.push("GOOGLE_SHEET_ID");
    if (!process.env.GOOGLE_CLIENT_EMAIL) missingVars.push("GOOGLE_CLIENT_EMAIL");
    if (!process.env.GOOGLE_PRIVATE_KEY) missingVars.push("GOOGLE_PRIVATE_KEY");

    if (missingVars.length > 0) {
      console.warn(`⚠️ Credenciais do Google Sheets incompletas na Vercel. Faltando: ${missingVars.join(", ")}`);
      return [];
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Produtos!A1:Z1000", // Lê um intervalo grande para achar os dados onde estiverem
    });

    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      console.log("⚠️ A planilha 'Produtos' foi encontrada, mas está vazia.");
      return [];
    }

    // 1. Encontrar a linha do cabeçalho dinamicamente
    let headerRowIndex = -1;
    let colMap = { id: -1, name: -1, price: -1, stock: -1, category: -1, description: -1, image: -1 };

    for (let i = 0; i < rows.length; i++) {
      // Normaliza a linha para minúsculas para facilitar a busca
      const row = rows[i].map(cell => cell ? cell.toString().toLowerCase().trim() : "");
      
      // Procura pela coluna 'id' para identificar a linha de cabeçalho
      const idIndex = row.findIndex(c => c === 'id' || c === 'code' || c === 'código');
      
      if (idIndex !== -1) {
        headerRowIndex = i;
        colMap.id = idIndex;
        // Mapeia as outras colunas baseadas nesta linha
        colMap.name = row.findIndex(c => c.includes('nome') || c.includes('produto') || c.includes('name'));
        colMap.price = row.findIndex(c => c === 'preço' || c === 'preco' || c.includes('valor') || c.includes('price'));
        colMap.stock = row.findIndex(c => c.includes('estoque') || c.includes('stock') || c.includes('qtd') || c.includes('quantidade'));
        colMap.category = row.findIndex(c => c.includes('categoria') || c.includes('category'));
        colMap.description = row.findIndex(c => c.includes('descrição') || c.includes('descricao') || c.includes('description'));
        colMap.image = row.findIndex(c => c.includes('imagem') || c.includes('image') || c.includes('foto'));
        break;
      }
    }

    if (headerRowIndex === -1) {
      console.log("⚠️ Não foi possível encontrar a linha de cabeçalho (procurando por uma coluna 'id').");
      console.log("Primeira linha lida (exemplo):", rows[0]);
      return [];
    }

    console.log(`🔍 Cabeçalho encontrado na linha ${headerRowIndex + 1}. Mapeamento:`, colMap);

    // 2. Processar as linhas de dados (após o cabeçalho)
    const dataRows = rows.slice(headerRowIndex + 1);
    
    // Mapa de imagens locais
    const imageMap = new Map<string, string>();
    try {
      // Tenta encontrar a pasta de imagens (testa minúsculo e maiúsculo)
      const possibleDirs = [
        path.join(process.cwd(), 'public', 'assets', 'produtos'),
        path.join(process.cwd(), 'public', 'assets', 'Produtos')
      ];
      
      let imagesDir = '';
      for (const dir of possibleDirs) {
        if (fs.existsSync(dir)) {
            imagesDir = dir;
            break;
        }
      }

      if (imagesDir) {
        const files = fs.readdirSync(imagesDir);
        
        // DEBUG: Mostra quantos arquivos foram achados para você conferir
        console.log(`📂 Pasta de imagens encontrada: ${imagesDir}`);
        console.log(`   Encontrados ${files.length} arquivos.`);

        files.forEach(file => {
          if (file.startsWith('.')) return;
          // Normalização ROBUSTA: remove acentos e caracteres especiais do nome do ARQUIVO também
          const nameWithoutExt = path.parse(file).name.toLowerCase()
              .normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
              .replace(/[^a-z0-9]/g, "");
          
          imageMap.set(nameWithoutExt, file);
        });
      } else {
          console.warn(`⚠️ AVISO: A pasta de imagens não foi encontrada em 'public/assets/produtos'.`);
      }
    } catch (err) {
      console.warn("Aviso: Não foi possível ler a pasta de imagens local.", err);
    }

    const products: Product[] = dataRows
      .filter(row => {
        // Filtra linhas que não têm ID válido na coluna identificada
        if (!row[colMap.id]) return false;
        const idVal = Number(row[colMap.id]);
        return !isNaN(idVal) && idVal > 0;
      })
      .map(row => {
        const id = Number(row[colMap.id]);
        const name = colMap.name !== -1 ? (row[colMap.name] || "Produto sem nome") : "Produto sem nome";
        
        // Tenta pegar do estático para fallback de dados não encontrados
        const staticProduct = staticProducts.find(p => p.id === id);

        // Preço
        let price = 0;
        if (colMap.price !== -1 && row[colMap.price]) {
           const priceString = row[colMap.price].toString().replace("R$", "").replace(",", ".").trim();
           price = Number(priceString);
        } else if (staticProduct) {
           price = staticProduct.price;
        }

        // Estoque
        let stock = 0;
        if (colMap.stock !== -1 && row[colMap.stock]) {
            stock = Number(row[colMap.stock]);
        } else if (staticProduct) {
            stock = staticProduct.stock;
        }

        // Categoria
        let category = "Geral";
        if (colMap.category !== -1 && row[colMap.category]) {
            category = row[colMap.category];
        } else if (staticProduct) {
            category = staticProduct.category;
        }

        // Descrição
        let description = "";
        if (colMap.description !== -1 && row[colMap.description]) {
            description = row[colMap.description];
        } else if (staticProduct) {
            description = staticProduct.description || "";
        }

        // Imagem
        let image = "/assets/placeholder.png";
        
        // 1. Tenta achar na pasta local pelo nome do produto (normalizado)
        let sheetValue = name.toString().trim();
        sheetValue = sheetValue.replace(/\.[^/.]+$/, ""); 
        const sheetName = sheetValue.toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove acentos (ex: ção -> cao)
            .replace(/[^a-z0-9]/g, ""); // Remove tudo que não for letra ou número (ex: espaços, barras)
        const matchedFile = imageMap.get(sheetName);

        if (matchedFile) {
            // console.log(`✅ Imagem encontrada para "${name}": ${matchedFile}`);
            image = `/assets/produtos/${matchedFile}`;
        } 
        // 2. Se não achou, tenta pegar da coluna de imagem da planilha (se existir)
        else if (colMap.image !== -1 && row[colMap.image]) {
            image = row[colMap.image];
        } 
        // 3. Se não achou, usa o fallback do arquivo estático
        else if (staticProduct) {
            // console.log(`⚠️ Imagem não encontrada na pasta para "${name}". Usando backup: ${staticProduct.image}`);
            image = staticProduct.image;
        }

        return {
          id,
          name,
          price: isNaN(price) ? 0 : price,
          image,
          category,
          stock: isNaN(stock) ? 0 : stock,
          description
        };
      });

      return products;

  } catch (error: any) {
    console.error("❌ ERRO CRÍTICO ao conectar no Google Sheets:", error.message);
    return [];
  }
}
