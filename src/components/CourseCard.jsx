import { Link } from "react-router-dom";
import clockIcon from "../assets/clockIcon.svg";  
import peopleIcon from "../assets/peopleIcon.svg"; 
import starIcon from "../assets/starIcon.png";    

export default function CourseCard({ course }) {
  return (
    <Link to={`/course/${course.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="course-card">
        <div className="course-card-image">
            <img src={course.thumbnail} alt={course.title} />
            <span className={`course-level ${course.level.toLowerCase()}`}>{course.level}</span>
        </div>
        <div className="course-card-content">
            <span className="course-category">{course.category}</span>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-instructor">By {course.instructor}</p>
            
            <hr className="divider" />
            
            <div className="course-stats">
            <div className="stat-item">
                <img src={clockIcon} alt="Duration" />
                <span>{course.duration}</span>
            </div>
            <div className="stat-item">
                <img src={peopleIcon} alt="Students" />
                <span>{course.enrolled.toLocaleString()}</span>
            </div>
            <div className="stat-item rating">
                <img src={starIcon} alt="Rating" />
                <span>{course.rating}</span>
            </div>
            </div>
        </div>
        </div>
    </Link>
  );
}