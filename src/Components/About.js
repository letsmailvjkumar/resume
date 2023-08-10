import dp from './man-dp.png';
const About = () =>{
    return(
        <div>
            <h2>About Me</h2>
            <img src={dp} alt="man-dp" style={{borderRadius: '50%', width:'200px', margin:'0 auto', display:'block'}} />
            <p>As a recent Computer Science graduate with a passion for software engineering, I am eager to embark on my journey in the industry. With a strong command of Core Java, C/C++, JavaScript, Hibernate, JPA, Spring Boot, Spring, JDBC, MySQL, Redis, HTML, CSS, Bootstrap,Tailwind, Git, and GitHub, I am well-equipped to tackle any challenge that comes my way. My proficiency in databases, data structures and algorithms, operating systems, and networking further enhances my ability to deliver exceptional results.</p>
            <p>But my skills don’t stop there. I am also a skilled problem-solver with a keen analytical mind and the ability to make sound decisions. My passion for implementing and launching new projects is matched only by my commitment to continuous learning and staying current with industry trends. This is evidenced by my successful completion of certifications in Java and SQL and my participation in various hackathons.</p>
            <p>With excellent communication and interpersonal skills, I am enthusiastic about joining a software development team and leveraging my skills and knowledge to contribute to its success. So if you’re looking for a motivated and talented software engineer with a passion for innovation and growth, look no further! 😊</p>
            <br />
            <hr />
        </div>
    )
}
export default About