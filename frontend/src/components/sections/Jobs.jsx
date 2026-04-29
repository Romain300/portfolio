import jobs from "../../data/jobs";
import CardJob from "../ui/CardJob";
import styles from "../../styles/sections.module.css";

function Jobs() {
    return (
        <section id="experience" className={styles.jobs}>
            {jobs.map((job) => (
                <CardJob job={job} key={job.id} />
            ))}

            <a 
                className={styles.resumeProjectsLink} 
                href="resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
            >
                View Full CV
            </a>
        </section>
    )
};

export default Jobs;
