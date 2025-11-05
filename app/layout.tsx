import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'РусТир - Управление стрелковыми тирами России',
  description: 'Профессиональное управление стрелковыми тирами на территории России',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
