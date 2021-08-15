import "./ExperienceItem.css";
import "./ExperienceDate";
import ExperienceDate from "./ExperienceDate";
import Card from "../UI/Card";

const ExperienceItem = (props) => {
  return (
    <Card className="experience-item">
     <ExperienceDate date={props.date} />
     <div className="experience-item__description">     
        <h2>{props.title}</h2>
     </div> 
      <div className="experience-item__time">{props.time}</div>
    </Card>
  );
};

export default ExperienceItem;
