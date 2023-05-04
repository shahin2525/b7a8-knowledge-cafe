import React from "react";
import "./Skill.css";
const Skill = (props) => {
  const {
    id,
    author_image,
    cover_image,
    author_name,
    published_date,
    read_time,
    title_description,
  } = props.skill;
  console.log(props.skill);
  return (
    <div className="skill">
      <img src={cover_image} alt="" />
      <div className="author-description-box">
        <div className="author-description">
          <img className="author-img" src={author_image} alt="" />
          <div className="description">
            <h5>{author_name}</h5>
            <p>{published_date}</p>
          </div>
        </div>
        <div className="book-marks-box">
          <p>0{read_time} min read</p>
          <span className="book-marks-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5"
              />
            </svg>

            {/* <FontAwesomeIcon icon="fa-regular fa-bookmark" /> */}
          </span>
        </div>
      </div>
      <div className="title-and-mark-read-box">
        <h2>{title_description}</h2>
        <a href="">marks as read</a>
      </div>
    </div>
  );
};

export default Skill;
