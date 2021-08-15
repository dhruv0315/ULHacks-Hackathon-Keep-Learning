import "./NewExperience.css";
import ExperienceForm from "./ExperienceForm";

const NewExperience = (props) => {
  const saveExperienceHandler = (enteredExperienceData) => {
    const experienceData = {
      ...enteredExperienceData,
      id: Math.random().toString(),
    };
    props.onAddExperience(experienceData);
  };
  return <div className="new-experience">
      <ExperienceForm onSaveExperienceData={saveExperienceHandler} />
  </div>

};

export default NewExperience;
