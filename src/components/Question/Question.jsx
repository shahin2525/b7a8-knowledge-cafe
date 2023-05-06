import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div>
      <h2>Q-1 What is the difference between props and state?</h2>
      <p>
        Answer:- State is the local state of the component which cannot be
        accessed and modified outside of the component. It's equivalent to local
        variables in a function. On the other hand,props makes components
        reusable by giving components the ability to receive data from their
        parent component in the form of props.
      </p>
      <h2>Q-2 How does useState work?</h2>
      <p>
        Answer:-useState is React Hook that allows you to add state to a
        functional component. It returns an array with two values: the current
        state and a function to update it. The Hook takes an initial state value
        as an argument and returns an updated state value whenever the setter
        function is called.
      </p>
      <h2>Q-3 What are useEffect doing without loading data?</h2>
      <p>
        Answer:-The useEffect in react hook that allows you to perform side
        effects in your components. It also controls side effects include
        retrieving data, direct DOM updates, and timers.{" "}
      </p>
      <h2>Q-4 How does react work</h2>
      <p>
        Answer: React relies on a virtual DOM, which is a copy of the actual
        DOM. React's virtual DOM is immediately reloaded to reflect this new
        change whenever there is a change in the data state. After which, React
        compares the virtual DOM to the actual DOM to figure out what exactly
        has changed.
      </p>
    </div>
  );
};

export default Question;
