import GoalTitle from "./GoalTitle";
import GoalBar from "../Chart/GoalBar"
import './RenderedGoals.css'
import Card from "../UI/Card";


const RenderedGoals = (props) => {
    return (
        <Card className="goals">
        <GoalTitle
        title={props.items[0].title}
        time={props.items[0].time} 
      />  

      <GoalTitle
        title={props.items[1].title}
        time={props.items[1].time}
        /> 

      <GoalTitle
        title={props.items[2].title}
        time={props.items[2].time}
      />
      <GoalTitle
        title={props.items[3].title}
        bar={props.items[3].bar}
        time={props.items[3].time}
      />
        </Card>
    )
}

export default RenderedGoals;