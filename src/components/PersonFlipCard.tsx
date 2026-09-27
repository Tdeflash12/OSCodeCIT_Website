import type { Person } from "../data/teamData";
import { FaLinkedin } from "react-icons/fa";

interface Props {
  person: Person;
}

export default function PersonFlipCard({ person }: Props) {
  return (
    <div className="person-card">
      <div className="person-card-inner">

        {/* =================================================
            FRONT OF CARD
           ================================================= */}

        <div
          className="person-card-face person-card-front"
          style={{
            backgroundImage: person.backgroundImage
              ? `url(${person.backgroundImage})`
              : undefined,
          }}
        >

          {/* Dark overlay over background */}
          <div className="person-background-overlay" />

          {/* Person photograph */}
          <div className="person-image-wrapper">
            <img
              src={person.image}
              alt={person.name}
              className="person-image"
            />
          </div>

          {/* Name and role */}
          <div className="person-front-info">

            <span>{person.role}</span>

            <h3>{person.name}</h3>

            

          </div>
        </div>


        {/* =================================================
            BACK OF CARD
           ================================================= */}

        <div className="person-card-face person-card-back">

          <div className="back-content">

            {/* Role */}
            <span className="back-role">
              {person.role}
            </span>


            {/* Name */}
            <h3>{person.name}</h3>


            {/* Description */}
            <p>
              {person.description}
            </p>


            {/* Skills */}
            {person.skills && person.skills.length > 0 && (
              <div className="skills">

                {person.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>
            )}


            {/* Social links */}
            {(person.github || person.linkedin) && (
              <div className="social-links">

                {/* =========================
                    GITHUB
                   ========================= */}

                {person.github && (
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${person.name}'s GitHub`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 .5C5.65.5.5 5.65.5 12c0 5.08
                        3.29 9.39 7.86 10.91.58.11.79-.25.79-.56
                        0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54
                        -3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69
                        -1.05-.72.08-.71.08-.71 1.16.08
                        1.77 1.19 1.77 1.19 1.03 1.76
                        2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54
                        -2.55-.29-5.23-1.28-5.23-5.7
                        0-1.26.45-2.29 1.19-3.1
                        -.12-.29-.52-1.46.11-3.05
                        0 0 .97-.31 3.17 1.18
                        .92-.26 1.9-.39 2.88-.39
                        .98 0 1.96.13 2.88.39
                        2.2-1.49 3.17-1.18 3.17-1.18
                        .63 1.59.23 2.76.11 3.05
                        .74.81 1.19 1.84 1.19 3.1
                        0 4.43-2.69 5.41-5.25 5.69
                        .41.35.78 1.04.78 2.1
                        0 1.52-.01 2.75-.01 3.12
                        0 .31.21.67.8.56C20.71 21.39
                        24 17.08 24 12 24 5.65 18.35.5 12 .5z"
                      />
                    </svg>
                  </a>
                )}


                {/* =========================
                    LINKEDIN
                   ========================= */}

                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${person.name}'s LinkedIn`}
                  >
                    <FaLinkedin size={18} aria-hidden="true" />
                  </a>
                )}

              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}