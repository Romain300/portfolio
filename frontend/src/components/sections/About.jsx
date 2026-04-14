import styles from "../../styles/sections.module.css";

function About() {
    return (
        <section id="about" className={styles.about}>
            <p>
                I’m a full-stack developer with a background in mathematics and corporate finance, now focused on building clean, scalable web applications. I enjoy working across both frontend and backend, where thoughtful design meets solid engineering.
            </p>
            <p>
                 Recently, I’ve been building projects using React, Node.js, and PostgreSQL, with a focus on writing maintainable code and creating intuitive user experiences.
            </p> 
        </section>
    )
};

export default About;