import React from "react";
import styled from "styled-components";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

const GoalList = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CourseGoalList = (props) => {
  return (
    <GoalList>
      <ul>
        {props.items.map((goal) => (
          <CourseGoalItem
            key={goal.id}
            id={goal.id}
            onDelete={props.onDeleteItem}
          >
            {goal.text}
          </CourseGoalItem>
        ))}
      </ul>
    </GoalList>
  );
};

export default CourseGoalList;
