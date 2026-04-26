import jobs from "../../data/jobs";
import CardJob from "../ui/CardJob";
import styles from "../../styles/sections.module.css";

function Jobs() {
    return (
        <section id="experience" className={styles.jobs}>
            {jobs.map((job) => (
                <CardJob job={job} key={job.id} />
            ))}
        </section>
    )
};

export default Jobs;
