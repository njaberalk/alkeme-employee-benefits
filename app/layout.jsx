import { Poppins } from 'next/font/google'
import './globals.css'
import ScrollToTop from './ScrollToTop'
import QuoteFormProvider from './QuoteFormProvider'
import FloatingUI from '../components/FloatingUI'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  metadataBase: new URL('https://alkemeins.com/employee-benefits'),
  title: {
    template: '%s | ALKEME',
    default: 'Employee Benefits | ALKEME',
  },
  description: 'Comprehensive employee benefits from ALKEME — plan design and admin for employers of all sizes. Group health, dental, vision, retirement, and more.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ALKEME Insurance Services',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'ALKEME Insurance Services — Employee Benefits Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Employee Benefits | ALKEME',
    description: 'Comprehensive employee benefits consulting for employers of all sizes across all 50 states.',
    images: ['https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://alkemeins.com/employee-benefits/',
  },
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    // Add your Google Search Console verification code here when ready
    // google: 'your-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
        <ScrollToTop />
        <QuoteFormProvider />
        <FloatingUI />
        {children}
      </body>
    </html>
  )
}
