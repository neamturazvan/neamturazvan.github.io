import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { profile, siteConfig } from "@/data/profile";
import { ComputationalVisual } from "@/components/ComputationalVisual";
import { ExternalLink } from "@/components/ExternalLink";
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: `${siteConfig.origin}/projects/${slug}/` },
    openGraph: {
      title: `${project.title} — ${profile.name}`,
      description: project.shortDescription,
      type: "article",
      url: `${siteConfig.origin}/projects/${slug}/`,
    },
    twitter: {
      card: "summary",
      title: project.title,
      description: project.shortDescription,
    },
  };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const index = projects.indexOf(project);
  return (
    <main id="main" className="shell case-study">
      <Link href="/#projects" className="back-link">
        All projects
      </Link>
      <header className="case-header">
        <p className="eyebrow">
          PROJECT / {String(index + 1).padStart(3, "0")} ·{" "}
          {project.domain.toUpperCase()}
        </p>
        <h1>{project.title}</h1>
        <p className="case-tagline">{project.tagline}</p>
        <div className="case-meta">
          {project.status && <span className="status">{project.status}</span>}
          {project.year && <span>{project.year}</span>}
          <ul className="tags">
            {project.technologies.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </header>
      <div className={`case-visual visual-${project.visual}`}>
        <ComputationalVisual kind={project.visual} />
        <p className="visual-caption">
          Conceptual illustration · not a screenshot or measured result
        </p>
      </div>
      <div className="case-body">
        <aside>
          <p className="eyebrow">PROJECT NOTES</p>
          <a href="#overview">Overview</a>
          {project.sections.map((s, i) => (
            <a key={s.title} href={`#section-${i}`}>
              {s.title}
            </a>
          ))}
          <a href="#repository">Repository</a>
        </aside>
        <div>
          <section id="overview" className="case-section">
            <h2>Overview</h2>
            <p>{project.fullDescription}</p>
          </section>
          {project.sections.map((s, i) => (
            <section id={`section-${i}`} className="case-section" key={s.title}>
              <h2>{s.title}</h2>
              {s.placeholder && (
                <span className="draft-label">Content placeholder</span>
              )}
              <p className={s.placeholder ? "draft-copy" : ""}>{s.content}</p>
            </section>
          ))}
          <section id="repository" className="case-section">
            <h2>Repository</h2>
            <ExternalLink
              link={{
                label: "GitHub repository",
                href: project.github,
                placeholder: "Repository link not added yet",
              }}
              className="repository-link"
            />
            {project.demo && (
              <ExternalLink
                link={{
                  label: "Live demo",
                  href: project.demo,
                  placeholder: "",
                }}
                className="repository-link"
              />
            )}
          </section>
        </div>
      </div>
      <nav className="more-projects" aria-label="Other projects">
        <p className="eyebrow">KEEP EXPLORING</p>
        {projects
          .filter((p) => p.slug !== slug)
          .map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}/`}>
              {p.title}
            </Link>
          ))}
      </nav>
    </main>
  );
}
