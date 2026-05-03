import styles from "../../styles/ui.module.css";
import projects from "../../data/projects";

function TabProject() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Project</th>
            <th>Techs</th>
            <th>Links</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className={styles.tableRow}>
              <td className={styles.projectTitle}>{project.title}</td>

              <td>
                <ul className={styles.cardTech}>
                  {project.tech.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </td>

              <td className={styles.cardLinks}>
                {project.live?.main && (
                  <a href={project.live.main} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
                {project.live?.public && (
                  <a href={project.live.public} target="_blank" rel="noreferrer">
                    Public
                  </a>
                )}
                {project.live?.admin && (
                  <a href={project.live.admin} target="_blank" rel="noreferrer">
                    Admin
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabProject;