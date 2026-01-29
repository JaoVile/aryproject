import { NextResponse } from 'next/server';

export async function GET() {
  // Este endpoint não é necessário para o checkout via WhatsApp.
  // O checkout é feito no frontend gerando um link para o WhatsApp.
  return NextResponse.json({ message: "Checkout via WhatsApp" });
}