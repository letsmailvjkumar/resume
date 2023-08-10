import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
const App = () => {
    return(
    <div>
        <div className="nav-bar"> 
            <Navbar />
        </div>
        <div className="about-me">
            <About />
        </div>
        <div className="content">
            <div className='para'><Content title='Skills' text='As a skilled software developer, I bring a wealth of knowledge and expertise to the table. 
            My frontend skills include proficiency in HTML, CSS, Bootstrap, and JavaScript, allowing me to create visually stunning and user-friendly interfaces. 
            On the backend, I am well-versed in Core Java, JDBC, REST API, Hibernate, Spring, Spring Boot, and MySQL. 
            These skills enable me to develop robust and scalable applications that meet the needs of users. 
            In addition to my technical skills, I am also proficient in a variety of development tools, including Eclipse, Visual Studio Code, Linux, Git, and GitHub. 
            These tools help me to write clean and maintainable code, collaborate effectively with team members, and streamline the development process.
            Overall, my diverse skill set and passion for software development make me a valuable asset to any team. I am always eager to learn and grow, and I am committed to delivering high-quality solutions that exceed expectations'/></div>
            <div className='para'><Content title="Qualifications" text='GeeksforGeeks-Java backend development: Core Java, JDBC, REST API, Hibernate, Spring, Spring Boot, JPA, MySQL, Redis, Eclipse, Git and GitHub
            Led the development of a user-friendly movie ticket booking system utilizing Core Java, Hibernate, Spring Boot, JDBC, and MySQL.
            Implemented RESTful APIs to handle movie search, user authentication, and ticket booking functionalities. Utilized Hibernate ORM for
            seamless interaction with the database, ensuring efficient data retrieval and storage.'/> </div>
            <div className='para'><Content title="Projects" text="
            Sparks Foundation:- Demonstrated proficiency in developing practical and functional web applications. Applied acquired skills to create user-friendly interfaces
            and optimize website performance.Exposys data labs:- Certified in developing software applications and successfully integrating external APIs and libraries. Gained practical experience in
            delivering high-quality, efficient software solutions.
            Movie Review Management Project:- Led the development of a user-friendly movie review booking system enabling users to search movies, rate and review films, find top-rated
            movies by genre, and book tickets for shows.Implemented real-time notifications to enhance the user experience and ensure timely ticket booking updates.
            Online Frozen Food Ordering Management System:- Developed a responsive website enabling customers to place food orders and manage their accounts securely. Integrated backend tools to optimize order management and ensure fast and accurate transactions. Implemented robust security measures to protect customer data and order records.
            "/></div>
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
    );
}
export default App