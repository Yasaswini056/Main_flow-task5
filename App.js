import React, { useState } from 'react';
import './App.css';

const courses = [
  {
    title: "Web Development",
    description: "Learn how to build websites using HTML, CSS, and JavaScript.",
    imgSrc: "https://habrastorage.org/getpro/habr/upload_files/704/b82/949/704b82949bd620fbb82f7df29409ad72.jpeg",
    duration: "6 weeks"
  },
  {
    title: "Data Science",
    description: "Learn data analysis and visualization using Python and R.",
    imgSrc: "https://www.fsm.ac.in/blog/wp-content/uploads/2022/07/FUqHEVVUsAAbZB0-1024x580.jpg",
    duration: "8 weeks"
  },
  {
    title: "Machine Learning",
    description: "Dive into machine learning concepts and algorithms.",
    imgSrc: "https://letstalkscience.ca/sites/default/files/2021-01/Robot_thinking.jpg",
    duration: "10 weeks"
  },
  { title: "Python Programming", 
    description: "Learn the fundamentals of Python programming and build real-world applications.", 
    imgSrc: "https://contentstatic.techgig.com/thumb/msid-107923788,width-800,resizemode-4/Python-programming-Must-have-tools-for-ML-and-Data-Science.jpg?9098", 
    duration: "12 weeks" 
  },
    { title: "Game Development", 
      description: "Create your own games using Unity and C#.", 
      imgSrc: "https://www.strivemindz.com/images/offerings/mobile/game-development.jpg", 
      duration: "10 weeks" 
    }

];


function App() {
  const [isCoursesVisible, setCoursesVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleExploreClick = () => {
    setCoursesVisible(true); 
  
    setTimeout(() => {
      const coursesSection = document.getElementById("courses");
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Short delay ensures the section is rendered
  };
  
  const handleGetStartedClick = (course) => {
    setSelectedCourse(course);
  
    // Scroll to the course details section
    setTimeout(() => {
      const courseSection = document.getElementById(course.title.toLowerCase().replace(/\s+/g, ''));
      if (courseSection) {
        courseSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("You have successfully registered!");
    const coursesSection = document.getElementById("courses");
    coursesSection.scrollIntoView({ behavior: 'smooth' });
    setSelectedCourse(null);
  };


  function validateContactForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const queryType = document.getElementById("queryType").value;
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !queryType || !message) {
      alert("All fields must be filled out.");
      return false;
    }
  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    alert("Thank you for reaching out! Your message has been sent successfully.");
    document.getElementById("contactForm").reset();
    return true;
  }
  

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <h1>Welcome to LearnToCode</h1>
        <p>Start your coding journey with easy tutorials and resources.</p>
        <button className="cta-button" onClick={handleExploreClick}>Explore Courses</button>
      </section>

      <section id="features" class="features">
        <div class="feature-item">
            <h3>Comprehensive Tutorials</h3>
            <p>Learn from beginner to advanced levels with step-by-step guides.</p>
        </div>
        <div class="feature-item">
            <h3>Hands-on Practice</h3>
            <p>Interactive coding exercises to test your knowledge.</p>
        </div>
        <div class="feature-item">
            <h3>Expert Support</h3>
            <p>Get help from experienced coders anytime.</p>
        </div>
    </section>

    <section id="testimonials" class="testimonials">
        <h2>What Our Users Say</h2>
        <div class="testimonial">
            <p>"LearnToCode helped me land my first job as a web developer!"</p>
            <h4>- Jane Doe</h4>
        </div>
        <div class="testimonial">
            <p>"The best platform for beginners to start coding!"</p>
            <h4>- John Smith</h4>
        </div>
    </section>

    <section id="contact" className="contact">
  <h2>Contact Us</h2>
  <form
    id="contactForm"
    onSubmit={(event) => {
      event.preventDefault();
      validateContactForm();
    }}
  >
    <input type="text" id="name" placeholder="Your Name" required />
    <input type="email" id="email" placeholder="Your Email" required />
    <select id="queryType" required>
      <option value="">Select Query Type</option>
      <option value="General Inquiry">General Inquiry</option>
      <option value="Course Information">Course Information</option>
      <option value="Technical Support">Technical Support</option>
    </select>
    <textarea id="message" placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</section>

      {isCoursesVisible && (
        <section id="courses" className="courses">
          <h2>Our Courses</h2>
          <div className="course-list">
            {courses.map((course, index) => (
              <div className="course-item" key={index}>
                <img src={course.imgSrc} alt={course.title} />
                <h3>{course.title}</h3>
                <button className="get-started-btn" onClick={() => handleGetStartedClick(course)}>Get Started</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {selectedCourse && (
        <section id={selectedCourse.title.toLowerCase().replace(/\s+/g, '')}
         className="course-details"
         >
          <h2>{selectedCourse.title}</h2>
          <img src={selectedCourse.imgSrc} alt={selectedCourse.title} style={{ width: '300px', height: '200px', objectFit: 'cover' }}/>
          <p>{selectedCourse.description}</p>
          <p><strong>Duration:</strong> {selectedCourse.duration}</p>

          <form className="register-form" onSubmit={handleFormSubmit}>
            <h3>Register for {selectedCourse.title}</h3>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Phone Number" required />
            <button type="submit">Register</button>
          </form>
        </section>
      )}

      <footer>
        <p>&copy; 2024 LearnToCode. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
