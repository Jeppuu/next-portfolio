import './globals.css'
import { Poppins, DynaPuff } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


export const dynapuff = DynaPuff({ weight: '500', subsets: ['latin'] })
export const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Jenna Blomqvist',
  description: 'My personal portfolio page built with create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
