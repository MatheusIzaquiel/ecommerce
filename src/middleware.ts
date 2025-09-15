// middleware.ts (na raiz do projeto)
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Definir rotas públicas (não exigem autenticação)
const isPublicRoute = createRouteMatcher([
  '/', // Home pública
  '/sign-in(.*)', // Rota de login
  '/sign-up(.*)', // Rota de cadastro
  '/product(.*)', // Rota de produtos
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect(); // Protege rotas não públicas (assíncrono!)
  }
});

export const config = {
  matcher: [
    // Ignora arquivos estáticos e internos do Next.js
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Sempre executa para rotas de API
    '/(api|trpc)(.*)',
  ],
};