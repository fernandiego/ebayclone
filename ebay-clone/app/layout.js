import './globals.css'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export const metadata = {
  title: 'eBay Clone',
  description: 'eBay Clone to studies purposes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ToastContainer/>
      {children}
      </body>
    </html>
  )
}
