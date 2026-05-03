import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: 'Juan David García García | Portafolio',
  description: 'Estudiante de Ingeniería de Sistemas en la UdeA, con experiencia en proyectos Full Stack e investigación de grandes volúmenes de datos e IA ética.',
  generator: 'Next.js y v0',
  keywords: ['desarrollador', 'full stack', 'python', 'java', 'javascript', 'sistemas', 'udea'],
  authors: [{ name: 'Juan David García García' }],
  icons: {
    icon: [
      {
        url: '/itemPorta.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/itemPorta.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/itemPorta.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/itemPorta.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#D97706',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
