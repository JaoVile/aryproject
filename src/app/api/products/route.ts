import { NextResponse } from 'next/server';
import { products as staticProducts, type Product } from '@/constants/products';
import { getProductsFromSheet } from '@/lib/googleSheets';

// OTIMIZAÇÃO DE PERFORMANCE (Cache):
// Substituímos 'force-dynamic' por 'revalidate'.
// Agora o site carrega instantaneamente (usando cache) e atualiza os dados em segundo plano a cada 60 segundos.
export const revalidate = 60;

export async function GET() {
  // 1. Tenta buscar da planilha
  const sheetProducts = await getProductsFromSheet();

  // 2. Se a planilha retornar dados, usa eles. Se não (erro ou vazia), usa o estático como backup.
  const products = sheetProducts.length > 0 ? sheetProducts : staticProducts;

  // 3. Filtra apenas produtos com estoque > 0 (Lógica da vitrine)
  const availableProducts = products.filter((product: Product) => product.stock > 0);

  // Log para te ajudar a saber o que está acontecendo no terminal
  if (sheetProducts.length === 0) {
    console.log("⚠️ AVISO: Usando produtos estáticos (backup). A conexão com a planilha falhou ou a aba não se chama 'Produtos'.");
  } else {
    console.log(`✅ SUCESSO: ${sheetProducts.length} itens na planilha. ${availableProducts.length} produtos visíveis na loja (estoque > 0).`);
  }

  return NextResponse.json(availableProducts, { status: 200 });
}