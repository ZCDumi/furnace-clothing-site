import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Gallery from './components/Gallery.jsx'
import CougarLine from './components/CougarLine.jsx'
import Worn from './components/Worn.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <CougarLine />
        <Worn />
      </main>
      <Footer />
    </>
  )
}
