import { profile } from "@/data/profile";
export function Footer() {
  return (
    <footer className="footer shell">
      <span>{profile.name}</span>
      <span>Built with curiosity. From the foundations up.</span>
      <a href="#top">Back to top</a>
    </footer>
  );
}
