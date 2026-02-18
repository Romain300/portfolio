import styles from "../../styles/layout.module.css";
function Header() {
    return (
        <header>
            <div className={styles.headerTop}>
                <h1>Romain Cappellotti</h1>
                <h2>Full-Stack Developer</h2>
                <p>I build scalable web applications.</p>
            </div>

            <nav className={styles.headerNav}>
                <a>About</a>
                <a>Projects</a>
                <a>Skills</a>
                <a>Contact</a>
            </nav>

            <div className={styles.headerSocials}>
                <a 
                    href="https://github.com/Romain300/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        viewBox="0 0 24 24"
                        className={styles.gitIcon}
                        aria-hidden="true"
                    >
                        <path
                            fill="currentColor"
                            d="M12 0.3C5.37 0.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.08 1.85 2.83 1.32 3.52 1 .1-.78.42-1.32.76-1.62-2.67-.3-5.47-1.33-5.47-5.93 0-1.3.47-2.36 1.23-3.2-.12-.3-.53-1.52.12-3.16 0 0 1-.32 3.3 1.22a11.5 11.5 0 0 1 6 0c2.3-1.54 3.3-1.22 3.3-1.22.65 1.64.24 2.86.12 3.16.77.84 1.23 1.9 1.23 3.2 0 4.6-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.3c0 .32.22.7.83.58A12.02 12.02 0 0 0 24 12.3C24 5.67 18.63 0.3 12 0.3Z"
                        />
                    </svg>
                </a>

                <a
                    href="www.linkedin.com/in/romain-cappellotti"
                    target="_blank"
                    rel="noopener noreferrer"
                
                >
                    <svg
                        viewBox="0 0 24 24"
                        className={styles.linkedinIcon}
                        aria-hidden="true"
                    >
                        <path
                            fill="currentColor"
                            d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.78v2.16h.07c.66-1.25 2.27-2.56 4.68-2.56 5 0 5.92 3.29 5.92 7.57V24h-5v-7.78c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.97 2.01-2.97 4.09V24h-5V8z"
                        />
                    </svg>

                </a>
            </div>


        </header>
    )
};

export default Header;