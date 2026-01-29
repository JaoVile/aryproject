// c:\Projetos\Workana\Sexshop\aryelleproject\src\middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // === CABEÇALHOS DE SEGURANÇA ===

  // 1. Proteção contra Clickjacking:
  // Impede que seu site seja aberto dentro de um iframe em outro site malicioso.
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');

  // 2. Proteção contra XSS (Cross-Site Scripting):
  // Ativa filtros de proteção em navegadores antigos.
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // 3. Proteção de Tipo de Conteúdo:
  // Impede que o navegador "adivinhe" o tipo de arquivo (MIME sniffing), evitando execução de scripts disfarçados.
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // 4. Política de Referência:
  // Controla quanta informação é enviada quando um usuário clica em um link saindo do seu site.
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // 5. HSTS (HTTP Strict Transport Security):
  // Força o navegador a usar sempre HTTPS, impedindo ataques de downgrade de protocolo.
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );

  return response;
}

// Configura em quais rotas o middleware deve rodar (todas)
export const config = {
  matcher: '/:path*',
};
