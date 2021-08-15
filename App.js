
import { Route } from 'react-router-dom';

import GoalSetting from "./pages/GoalSetting";
import ExperienceTracker from './pages/ExperienceTracker';
import HomePage from './pages/HomePage';
import BeInspired from './pages/BeInspired';


const App = () => {

  return (
    <div>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/be-inspired" exact>
        <BeInspired />
      </Route>
      <Route path="/goal-setting" exact>
        <GoalSetting />
      </Route>
      <Route path="/experience-tracker" exact>
        <ExperienceTracker />
      </Route>
    </div>
  );
};

export default App;
