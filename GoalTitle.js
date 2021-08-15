import "./GoalTitle.css";
import Card from "../UI/Card";
import GoalBar from "../Chart/GoalBar";

const GoalTitle = (props) => {
  return (
    <Card className="goal-title">
      <div className="goal-title__description">
        <h2>{props.title}</h2>
      </div>
      <GoalBar />
      <div className="goals-title__time">{props.time}</div>
    </Card>
  );
};

export default GoalTitle;
