import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="shell not-found">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>Nothing here. Yet.</h1>
      <p>This page may have moved, or the address may be incomplete.</p>
      <Link className="button" href="/">
        Return to portfolio
      </Link>
    </main>
  );
}
