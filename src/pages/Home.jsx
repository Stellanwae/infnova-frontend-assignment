import { useState, useEffect } from "react";
import CourseCard from "../components/CourseCard"; 

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://infnova-course-api.vercel.app/api/courses"
        );
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();
        if (!Array.isArray(data) || data.length === 0)
          throw new Error("API returned no courses");

        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="home-hero">
        <div className="home-hero-container">
          <h1>Explore Our Courses</h1>
          <p>Master new skills with expert-led courses designed for the modern learner. Start your learning journey today with INFNOVA Academy.</p>
        </div>
      </div>

      <div className="search-section">
        <div className="search-container">
          <input type="text" className="search-box" placeholder="Search courses, instructors..." />
          <input type="text" className="search-box" placeholder="" />
          <input type="text" className="search-box" placeholder="" />
        </div>
      </div>

     
        {/* Content */}
        <div className="courses-section">
        {loading && <p style={{ textAlign: "center" }}>Loading courses...</p>}
        {error && (
            <p style={{ textAlign: "center", color: "red" }}>{error}</p>
        )}
        {!loading && !error && (
            <>
            <div className="courses-header">
                <p>Showing {courses.length} of {courses.length} courses</p>
            </div>
            <div className="courses-grid">
                {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
                ))}
            </div>
            </>
        )}
        </div>
    </>
  );
}