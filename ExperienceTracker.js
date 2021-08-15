import { useState } from "react";
import RenderedExperiences from "../components/Experiences/RenderedExperiences";
import NewExperience from "../components/User Input (New Experiences)/NewExperience";
import MainNav from "../components/layout/MainNav";



const ExperienceTracker = () => {
    const dummy_experiences = [
      {
        id: "e1",
        title: "Cooking",
        time: "1 Hour",
        date: new Date(2021, 7, 14),
      },
      {
        id: "e2",
        title: "Singing",
        time: "2 Hours",
        date: new Date(2021, 5, 17),
      },
      {
        id: "e3",
        title: "Photography",
        time: "30 mins",
        date: new Date(2021, 8, 9),
      },
      {
        id: "e4",
        title: "New Language",
        time: "4 Hours",
        date: new Date(2020, 5, 9),
      },
    ];
  
    const [experiences, setExperiences] = useState(dummy_experiences);
  
    const addExperienceHandler = (experience) => {
      setExperiences((prevExperiences) => {
        return [experience, ...prevExperiences];
      });
    };

    return (
        <div className="experience_container">
           <MainNav />
          <NewExperience onAddExperience={addExperienceHandler} />
          <RenderedExperiences items={experiences} />
        </div>
      );
    };
    
export default ExperienceTracker;