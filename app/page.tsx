import { profile, links } from "@/data/profile";
import { projects } from "@/data/projects";
import { ComputationalVisual } from "@/components/ComputationalVisual";
import { ExternalLink } from "@/components/ExternalLink";
import { ProjectCard } from "@/components/ProjectCard";
import { ProfileSections } from "@/components/ProfileSections";
export default function Home() {
  return (
    <main id="main">
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-heading">
          <p className="eyebrow hero-kicker">AI STUDENT / SOFTWARE BUILDER</p>
          <h1 id="hero-title">
            Understanding.
            <br />
            Then <span>building.</span>
          </h1>
          <p className="hero-intro">
            I’m {profile.name}. I explore the systems beneath the abstraction —
            and build things to understand them.
          </p>
          <div className="hero-actions">
            <a className="button" href="#projects">
              View my work
            </a>
            <ExternalLink link={links.github} className="hero-social" />
          </div>
        </div>
        <div className="hero-figure">
          <span className="figure-label eyebrow">BENEATH THE ABSTRACTION</span>
          <ComputationalVisual hero />
          <div className="figure-foot">
            <span>INPUT</span>
            <span>UNDERSTANDING</span>
            <span>OUTPUT</span>
          </div>
        </div>
        <div className="hero-meta">
          <span>
            {profile.degree}
            <br />
            <strong>{profile.university}</strong>
          </span>
          <span>
            {profile.location}
            <br />
            <strong>Expected graduation / {profile.graduation}</strong>
          </span>
          <span className="hero-index">01 — AN ONGOING EXPLORATION</span>
        </div>
      </section>
      <section id="projects" className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>Ideas, implemented.</h2>
          </div>
          <p>
            A few things I’ve built
            <br />
            to see how they work.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
      <ProfileSections />
    </main>
  );
}
