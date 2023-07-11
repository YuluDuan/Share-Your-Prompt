import Nav from '@components/Nav';
import '@styles/global.css'

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Promts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient'> </div>
        </div>
        <main className='app'>
        <Nav />
        {children}
        </main>
        </body>
    </html>
  )
}
