import Link from "next/link";
import type { Project } from "@/data/projects";
import { ComputationalVisual } from "./ComputationalVisual";
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      <div className="project-copy">
        <div className="project-top">
          <span className="eyebrow">
            PROJECT / {String(index + 1).padStart(3, "0")}
          </span>
          {project.status && <span className="status">{project.status}</span>}
        </div>
        <Link href={`/projects/${project.slug}/`} className="project-title">
          <h3>{project.title}</h3>
        </Link>
        <p>{project.shortDescription}</p>
        <ul className="tags" aria-label="Technologies">
          {project.technologies.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <Link className="text-link" href={`/projects/${project.slug}/`}>
          Explore project<span className="sr-only">: {project.title}</span>
        </Link>
      </div>
      <div className={`project-visual visual-${project.visual}`}>
        <ComputationalVisual kind={project.visual} />
        <span className="visual-caption">
          {project.visual === "network"
            ? "Conceptual network · not training results"
            : project.visual === "pixels"
              ? "Grayscale study · illustrative"
              : "Binary tree · illustrative"}
        </span>
      </div>
    </article>
  );
}
