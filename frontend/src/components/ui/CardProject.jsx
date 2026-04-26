import styles from "../../styles/ui.module.css"

function CardProject({ project }) {
    return (
        <div className={styles.card}> 

            <div className={styles.cardImage}>
                <img src={project.image} alt={project.title}/>
            </div>

            <div className={styles.cardContent}>

                <div className={styles.cardHeader}>
                    <h3>{project.title}</h3>
                    <span className={styles.cardCategory}>{project.category}</span>
                </div>

                <p className={styles.cardDescription}>
                    {project.description}
                </p>

                <ul className={styles.cardTech}>
                    {project.tech.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>

                <div className={styles.cardLinks}>
                    {project.live.main && (
                        <a href={project.live.main} target="_blank" rel="noreferrer">
                            Live
                        </a>
                    )}
                    {project.live.public && (
                        <a href={project.live.public} target="_blank" rel="noreferrer">
                            Live (Public)
                        </a>
                    )}
                    {project.live.admin && (
                        <a href={project.live.admin} target="_blank" rel="noreferrer">
                            Live (Admin)
                        </a>
                    )}
                    <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </div>


            </div>
        </div>

    )
};

export default CardProject;


