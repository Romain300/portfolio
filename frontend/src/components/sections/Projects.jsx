import CardProject from "../ui/CardProject";
import projects from "../../data/projects";
import styles from "../../styles/sections.module.css";
import { Link } from "react-router-dom";

function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            {projects.slice(0,4).map((project) => (
                <CardProject key={project.id} project={project} />
            ))}

            <Link
                className={styles.resumeProjectsLink}
                to="/collection"
            >
                Full Project Collection
            </Link>
        </section>
    )
};

export default Projects;

//add project archives with routes, route and browserrouter