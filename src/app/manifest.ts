import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aesthetic Clinic | Beleza Avançada',
    short_name: 'Aesthetic',
    description: 'Clínica de estética avançada e harmonização facial.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F9F7F2', // Cor de fundo ao abrir o app
    theme_color: '#1C1917', // Cor da barra de status
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}