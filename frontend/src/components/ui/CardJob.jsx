import styles from "../../styles/ui.module.css";

function CardJob({ job }) {
    return (
        <div className={styles.cardJob}> 

            <div className={styles.cardPeriod}>
                {job.period}
            </div>
            
            <div className={styles.cardContent}>

                <h3 className={styles.cardTitle}>
                    {job.role} · <span>{job.company}</span>
                </h3>

                <p className={styles.cardSummary}>
                    {job.summary}
                </p>

                <ul className={styles.cardHighlights}>
                    {job.highlights.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <ul className={styles.cardTech}>
                    {job.tech.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>

            </div>
        </div>
    );
}

export default CardJob;