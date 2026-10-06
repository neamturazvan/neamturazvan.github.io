import Link from "next/link";
export function Header() {
  return (
    <header className="header">
      <nav className="nav shell" aria-label="Main navigation">
        <Link className="wordmark" href="/" aria-label="Răzvan Neamțu, home">
          <span className="brand-symbol" aria-hidden="true">
            r<span>n</span>
          </span>
          <span>RĂZVAN NEAMȚU</span>
        </Link>
        <div className="nav-links">
          <Link href="/#about">About</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#now">Now</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
