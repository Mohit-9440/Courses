import React,{useState,useEffect} from "react";
import "./coursedetails.css";
import { Navbar } from "../../components/navbar/Navbar";
import Backgrund from "../../assets/Rectangle.png"
export const CourseDetails = () => {
  return (
    <div className="course-details-wrapper">
      <div className="course-details">
        <Navbar />
        <div className="course-details-page">
          <section className="course-details-main">
            <div className="course-details-main-left">
              <img className="course-details-main-left-img" src={Backgrund} alt=""/>
            </div>
            <div className="course-details-main-right">
              <div className="course-details-main-right-course">course</div>
              <div className="course-details-main-right-instructor">Teacher: </div>
              <div className="course-details-main-right-prerequisites">prerequisites</div>
              <div className="course-details-main-right-enrollmentStatus">enrollmentStatus</div>
              <div className="course-details-main-right-duration">duration</div>
              <div className="course-details-main-right-schedule">schedule</div>
              <div className="course-details-main-right-location">location</div>
              <div className="course-details-main-right-price">Price </div>
            </div>
          </section>
          <section className="course-details-content">
            <div className="course-details-content-main">
              <div className="course-details-content-main-desc">
                <div className="course-details-content-main-desc-head">Description</div>
                <div className="course-details-content-main-desc-con">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facere vero velit, at sint eligendi quis, aperiam id pariatur hic nisi dolor. Unde quos aspernatur inventore molestiae debitis laboriosam velit harum fuga architecto magnam similique praesentium, ad, necessitatibus eius quis repellendus dolorem error ullam. Error consequuntur suscipit, possimus commodi at dolor debitis tempore, totam quasi fugit molestias provident ad facilis, a perspiciatis quos perferendis soluta laboriosam quo tempora. Ipsum praesentium accusantium culpa, reprehenderit veritatis, voluptates quis velit eligendi iure laborum minima perferendis aliquid ducimus earum non perspiciatis. Et ea vitae possimus voluptatem, alias itaque mollitia ad beatae excepturi modi quasi.</div>
              </div>
              <div className="course-details-content-main-syll">
                <div className="course-details-content-main-syll-head">Syllabus</div>
                <div className="course-details-content-main-syll-con">
                  <div className="course-details-content-main-syll-week">Week 1</div>
                  <div className="course-details-content-main-syll-week-head">Advanced React Components</div>
                  <div className="course-details-content-main-syll-week-con">Explore advanced concepts in React component design.</div>
                </div>
                <div className="course-details-content-main-syll-con">
                  <div className="course-details-content-main-syll-week">Week 2</div>
                  <div className="course-details-content-main-syll-week-head">Advanced React Components</div>
                  <div className="course-details-content-main-syll-week-con">Explore advanced concepts in React component design.</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
