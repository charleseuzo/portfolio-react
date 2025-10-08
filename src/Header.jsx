function Header() {
  return (
    <header className="">
      <h1 className="text-2xl font-bold">MonSite</h1>
      <nav>
        <ul className="flex gap-4">
          <li>Accueil</li>
          <li>Services</li>
          <li>À propos</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header