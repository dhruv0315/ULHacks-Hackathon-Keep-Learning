import ExperienceItem from "./ExperienceItem";
import './RenderedExperiences.css'
import Card from "../UI/Card";



const RenderedExperiences = (props) => {
    return (
        <Card className="experiences">
        <ExperienceItem
        title={props.items[0].title}
        time={props.items[0].time}
        date={props.items[0].date}
      />
      <ExperienceItem
        title={props.items[1].title}
        time={props.items[1].time}
        date={props.items[1].date}
      />
      <ExperienceItem
        title={props.items[2].title}
        time={props.items[2].time}
        date={props.items[2].date}
      />
      <ExperienceItem
        title={props.items[3].title}
        time={props.items[3].time}
        date={props.items[3].date}
      />
        </Card>
    )
}

export default RenderedExperiences;