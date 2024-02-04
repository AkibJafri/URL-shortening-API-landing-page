import { Providers } from '@/providers'
import { extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
  colors: {
    brand: {
      900: 'red',
    },
  },
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>{children}</Providers>
    </html>
  )
}
