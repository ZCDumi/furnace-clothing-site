export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Furnace home">
        <img src="/images/flame-red.png" alt="" width="22" height="30" />
        <span>Furnace</span>
      </a>
      <nav aria-label="Main">
        <a href="#collection">Collection</a>
        <a href="#cougar">Cougar</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
