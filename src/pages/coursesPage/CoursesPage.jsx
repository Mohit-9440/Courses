import React,{useState,useEffect} from "react";
import "./coursespage.css";
import { Navbar } from "../../components/navbar/Navbar";
import Banner from "../../assets/courses-banner-img.png";
import Background from "../../assets/Rectangle.png";

export const CoursesPage = () => {
  const [coursesData, setCoursesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://coursesdata.free.mockoapp.net/coursesData");
        const data = await response.json();
        setCoursesData(data);
        console.log("🚀 ~ fetchData ~ data:", data)
      } catch (error) {
        console.error("Error fetching courses data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="courses-wrapper">
      <div className="courses">
        <Navbar />
        <div className="courses-page">
          <section className="courses-top-banner-wrapper">
            <div className="courses-top-banner">
              <div className="courses-top-banner-left">
                <div className="courses-top-banner-left-heading">
                  Edudu offers you a 30% discount this season
                </div>
                <div className="courses-top-banner-left-subheading">
                  Promotion valid from Jan 15, 2024 - Feb 15, 2024
                </div>
                <div className="courses-top-banner-left-button">
                  <div className="courses-top-banner-left-button-text">
                    Explore now
                  </div>
                </div>
              </div>
              <div className="courses-top-banner-right">
                <div className="courses-top-banner-right-img">
                  <img className="course-banner" src={Banner} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section className="courses-course-wrapper">
            <div className="courses-course-container">
            {coursesData && coursesData.map((course, index) => (
              <div key={index} className="courses-course-card">
                <div className="courses-course-card-top">
                  <img
                    className="courses-course-card-top-svg"
                    src={course.thumbnail}
                    alt=""
                  />
                </div>
                <div className="courses-course-card-bottom">
                  <div className="courses-course-card-bottom-first">
                    <div className="courses-course-card-bottom-heading">
                    {course.name}
                    </div>
                    <div className="courses-course-card-bottom-content">
                    {course.description}
                    </div>
                  </div>
                  <div className="courses-course-card-bottom-second">
                    <div className="courses-course-card-bottom-second-ins">{course.instructor}</div>
                    <div className="courses-course-card-bottom-second-price">₹{course.price}</div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </section>
          <section></section>
        </div>
      </div>
    </div>
  );
};
