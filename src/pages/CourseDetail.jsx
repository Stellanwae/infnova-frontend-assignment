import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import clockIcon from "../assets/clockIcon.svg";
import peopleIcon from "../assets/peopleIcon.svg";
import starIcon from "../assets/starIcon.png";
import arrowIcon from "../assets/arrowIcon.svg";
import trophyIcon from "../assets/trophyIcon.svg";
import check from "../assets/check.svg"
import book from "../assets/book.svg"

export default function CourseDetail() {
  const { id } = useParams();
  console.log("Course ID:", id)
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`https://infnova-course-api.vercel.app/api/courses/${id}`);
        if (!response.ok) throw new Error("Course not found");
        const data = await response.json();
        setCourse(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) return <div className="detail-loading">Loading course details...</div>;
  if (error) return <div className="detail-error">{error}</div>;
  if (!course) return <div className="detail-error">Course not found</div>;


  const instructorBio = "Expert Cloud Computing professional with over 10 years of industry experience. Passionate about teaching and helping students achieve their career goals.";
 

  return (
    <div className="course-detail">
      {/* Back to Courses Link */}
      <div className="detail-nav">
        <Link to="/" className="back-link">← Back to Courses</Link>
      </div>

    <div className="detail-hero">
    <div className="detail-hero-container">
      {/* Left Column - Course Info */}
      <div className="detail-info">
        <span className="detail-category">{course.category}</span>
        <h1 className="detail-title">{course.title}</h1>
        <p className="detail-description">{course.description}</p>
        
        <div className="detail-meta-row">
          <div className="meta-item">
            <img src={peopleIcon} alt="Instructor" />
            <span>{course.instructor}</span>
          </div>
          <div className="meta-item">
            <img src={clockIcon} alt="Duration" />
            <span>{course.duration}</span>
          </div>
          <div className="meta-item">
            <img src={peopleIcon} alt="Enrolled" />
            <span>{course.enrolled.toLocaleString()} enrolled</span>
          </div>
          <div className="meta-item">
            <img src={starIcon} alt="Rating" />
            <span>{course.rating} rating</span>
          </div>
        </div>

        <button className={`level-button ${course.level.toLowerCase()}`}>
          {course.level} Level
        </button>
      </div>

      {/* Right Column - Image */}
      <div className="detail-hero-image">
        <img src={course.thumbnail} alt={course.title} />
      </div>
    </div>
  </div>

      <div className="detail-layout">
        {/* Main Content - Left Column */}
        <div className="detail-main">
     
          {/* What You'll Learn */}
          <div className="learn-section detail-boxes">
            <div className="learn-header">
              <img src={book} alt="Book" />
              <h2>What You'll Learn</h2>
            </div>
              
            <div className="skills-grid">
              {course.skills?.map((skill, index) => (
                <div key={index} className="skill-item">
                  <img src={check} alt="Check" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

           {/* Course Description */}
          <div className="description-section detail-boxes">
            <h2>Course Description</h2>
            <p>{course.description}</p>
            <p>This comprehensive course is designed to provide you with practical, hands-on experience and real-world skills. You'll work on projects that simulate actual industry scenarios, giving you the confidence to apply your knowledge immediately.</p>
          </div>

          {/* Instructor Info */}
          <div className="instructor-section detail-boxes">
            <h2>Your Instructor</h2>
            <div className="instructor-info">
              <div className="instructor-avatar">
                <div className="avatar-placeholder">
                  {course.instructor.charAt(0)}
                </div>
              </div>
              <div className="instructor-details">
                <h3>{course.instructor}</h3>
                <p>{instructorBio}</p>
              </div>
            </div>
          </div>
        </div>

        

        {/* Sidebar - Right Column */}
        <div className="detail-sidebar">
          {/* Course CTA */}
          <div className="sidebar-texts">
              <h3 className="sidebar-heading">Enroll Today</h3>
              <p className="sidebar-paragraph">Join 2,105 students already enrolled</p>
          </div>
          

          {/* Enroll Section */}
          <div className="enroll-section">
            <button className="enroll-button">Enroll Now</button>
            <button className="wishlist-button">
              <img src={trophyIcon} alt="Add to wishlist" />
              Add to Wishlist
            </button>
            
          </div>

          {/* Course Content */}
          <div className="course-content">
            <h4 className="course-content-header">
              This Course includes:
            </h4>
            <div className="course-content-details">
              <div className="course-content-check">
                <img src={check} alt="Check" />
                <span>9 weeks of content</span>
              </div>
              <div className="course-content-check">
                <img src={check} alt="Check" />
                <span>Lifetime access</span>
              </div>
              <div className="course-content-check">
                <img src={check} alt="Check" />
                <span>Certificate of completion</span>
              </div>
              <div className="course-content-check">
                <img src={check} alt="Check" />
                <span>Access on mobile and desktop</span>
              </div>
              <div className="course-content-check">
                <img src={check} alt="Check" />
                <span>Downloadable resources</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}