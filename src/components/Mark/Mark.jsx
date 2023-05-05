import React from "react";
import "./Mark.css";

const Mark = (props) => {
  const { title_description, id, author_name } = props.bookMarks;
  // console.log(props);
  const bookMarks = props.bookMarks;
  // console.log(bookMarks);
  let time = 0;
  let title = "";
  for (const mark of bookMarks) {
    title = mark.title_description;
  }

  return (
    <div className="mark">
      <h4>Bookmarked blogs: {bookMarks.length}</h4>

      {/* {bookMarks.map((bookmark) => (
        <p>{bookmark}</p>
      ))} */}
    </div>
  );
};

export default Mark;
