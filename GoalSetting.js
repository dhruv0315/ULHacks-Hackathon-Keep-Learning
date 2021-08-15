import React, { useState } from 'react';
import MainNav from "../components/layout/MainNav";
import RenderedGoals from "../components/Goals/RenderedGoals";
import NewGoal from "../components/User Input (New Goals)/NewGoal";
import GoalBar from "../components/Chart/GoalBar";



  const GoalSetting = () => {
    const dummy_goals = [
      {
        id: "e1",
        title: "Cooking",
        time: "1 Hour",
      },
      {
        id: "e2",
        title: "Singing",
        time: "2 Hours",      
      },
      {
        id: "e3",
        title: "Photography",
        time: "30 mins",
      },
      {
        id: "e4",
        title: "New Language",
        time: "4 Hours",
      },
    ];
    const [goals, setGoals] = useState(dummy_goals)
  
    const addGoalHandler = (goal) => {
      setGoals((prevGoals) => {
        return [goal, ...prevGoals];
      });
    };


  return (
  <div className="goal-container">
    <MainNav />
    <NewGoal onAddGoal={addGoalHandler} />
    <RenderedGoals items={goals} />
    </div>
  )




}


export default GoalSetting;
