import React from "react";
import styled from "styled-components";

const GoalListItem = styled.div`
  margin: 1rem 0;
  background: #649bf4;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: white;
  padding: 1rem 1rem;
  cursor: pointer;
`;

const CourseGoalItem = (props) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <GoalListItem>
      <ul className="goal-item" onClick={deleteHandler}>
        {props.children}
      </ul>
    </GoalListItem>
  );
};

export default CourseGoalItem;
