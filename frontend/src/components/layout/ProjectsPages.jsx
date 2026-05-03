import styles from "../../styles/layout.module.css";
import AllProjects from "../sections/AllProjects";

function ProjectsPage() {
    return (
        <div className={styles.layoutProjectPage}>
            <main>
                <AllProjects />
            </main>
        </div>
        
    )
};

export default ProjectsPage;