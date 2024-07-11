import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'

import { cn } from '@/lib/utils'
const fontSans = FontSans({subsets: ['latin'],variable: '--font-sans',
})

export const metadata: Metadata = {
	// TODO: modificar con la url final de produccion
	// metadataBase: new URL('https://www.landx.vercel'),
	title: {
		template: '%s | LandX',
		default: 'LandX',
	},
	description: 'Crea tu landing page con AI',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>{children}</body>
		</html>
	)
}