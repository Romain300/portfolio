import CardProject from "../ui/CardProject";
import projects from "../../data/projects";
import styles from "../../styles/sections.module.css";

function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            {projects.slice(0,4).map((project) => (
                <CardProject key={project.id} project={project} />
            ))}

            <a
                className={styles.resumeProjectsLink}
                href="/collection"
            >
                Full Project Collection
            </a>
        </section>
    )
};

export default Projects;

//add project archives with routes, route and browserrouter