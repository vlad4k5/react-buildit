import s from './Header.module.scss'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logoContainer}>
        <svg height="50" width="50">
          <circle cx="25" cy="25" r="25" fill="#4397A4" />
        </svg>
        <span className={s.logoName}>Buildit</span>
      </div>
      <nav>
        <ul><a href="/">About</a></ul>
        <ul><a href="/">Services</a></ul>
        <ul><a href="/">Projects</a></ul>
        <ul><a href="/">Contact</a></ul>
      </nav>

      <button className={s.needProjectBtn}>Need a project?</button>
    </header>
  )
}

export default Header