import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calculadora Pots',
  description: 'calcular os preços dos posts',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="text-center min-h-screen bg-background_dark flex justify-center items-center p-4">{children}</body>
    </html>
  )
}
