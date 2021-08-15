import "./NewGoal.css";
import GoalForm from "./GoalForm";

const NewGoal = (props) => {
  const saveGoalHandler = (enteredGoalData) => {
    const GoalData = {
      ...enteredGoalData,
      id: Math.random().toString(),
    };
    props.onAddGoal(GoalData);
  };
  return <div className="new-goal">
      <GoalForm onSaveGoalData={saveGoalHandler} />
  </div>

};

export default NewGoal;