
import './globals.css'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
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
	description: 'Design your own Landing page with AI'
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}