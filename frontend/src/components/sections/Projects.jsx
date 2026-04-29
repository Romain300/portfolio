import CardProject from "../ui/CardProject";
import projects from "../../data/projects";
import styles from "../../styles/sections.module.css";

function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            {projects.map((project) => (
                <CardProject key={project.id} project={project} />
            ))}

            <a
                className={styles.resumeProjectsLink}
                target="_blank"
                rel="noopener norefferer"
            >
                Full Project Collection
            </a>
        </section>
    )
};

export default Projects;

//add project archives with routes, route and browserrouter