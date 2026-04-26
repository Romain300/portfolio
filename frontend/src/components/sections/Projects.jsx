import CardProject from "../ui/CardProject";
import projects from "../../data/projects";
import styles from "../../styles/sections.module.css";

function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            {projects.map((project) => (
                <CardProject key={project.id} project={project} />
            ))}
        </section>
    )
};

export default Projects;