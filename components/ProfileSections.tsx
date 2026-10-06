import {
  profile,
  currentActivities,
  skills,
  interests,
  links,
} from "@/data/profile";
import { ExternalLink } from "./ExternalLink";
export function ProfileSections() {
  return (
    <>
      <section id="about" className="section shell about-section">
        <div className="about-heading">
          <p className="eyebrow">02 / A LITTLE CONTEXT</p>
          <h2>
            Curiosity, down
            <br />
            to the foundations.
          </h2>
        </div>
        <div className="about-copy">
          <p className="lead">
            I study Artificial Intelligence at {profile.university}. I’m drawn
            to the place where mathematics, algorithms, and working software
            meet.
          </p>
          <p>
            Using a library is useful. Building a small version myself helps me
            ask better questions. That’s why I often learn by implementing the
            underlying ideas — especially in machine learning and numerical
            computing.
          </p>
          <p>
            I also enjoy finding clear, intuitive ways to explain what I’ve
            learned. Beyond the code, I’m interested in engineering environments
            where software meets real systems, from telemetry to performance
            optimization.
          </p>
          <div className="interests">
            <p className="eyebrow">THINGS I KEEP COMING BACK TO</p>
            <ul>
              {interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="now" className="section shell now-section">
        <div>
          <p className="eyebrow">03 / NOW</p>
          <h2>
            Work in progress.
            <br />
            <span className="muted">So am I.</span>
          </h2>
        </div>
        <ol className="now-list">
          {currentActivities.map((activity, i) => (
            <li key={activity}>
              <span className="list-index">0{i + 1}</span>
              <span>{activity}</span>
            </li>
          ))}
        </ol>
      </section>
      <section
        className="section shell education-section"
        aria-labelledby="education-title"
      >
        <div>
          <p className="eyebrow">04 / EDUCATION</p>
          <h2 id="education-title">A foundation to build on.</h2>
        </div>
        <div className="education-record">
          <span className="education-years">{profile.educationYears}</span>
          <div>
            <h3>{profile.degree}</h3>
            <p className="school">{profile.university}</p>
            <p>
              {profile.faculty}
              <br />
              {profile.location}
            </p>
            <p className="education-note">
              Expected graduation: {profile.graduation}
            </p>
            <ul className="study-topics">
              <li>Algorithms & data structures</li>
              <li>Probability & statistics</li>
              <li>Machine learning</li>
              <li>Artificial intelligence</li>
              <li>Software engineering</li>
            </ul>
          </div>
        </div>
      </section>
      <section
        className="section shell skills-section"
        aria-labelledby="skills-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">05 / TOOLKIT</p>
            <h2 id="skills-title">The tools behind the work.</h2>
          </div>
          <p>Learning through use.</p>
        </div>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category}>
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="section shell contact-section">
        <div>
          <p className="eyebrow">06 / CONTACT</p>
          <h2>
            Good ideas start
            <br />
            with a conversation.
          </h2>
          <p>
            I’m interested in applied ML, software engineering opportunities,
            and thoughtful conversations about how things work.
          </p>
        </div>
        <div className="contact-links">
          {Object.values(links).map((link) => (
            <ExternalLink
              key={link.label}
              link={link}
              className="contact-link"
            />
          ))}
        </div>
      </section>
    </>
  );
}
