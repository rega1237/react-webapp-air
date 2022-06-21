import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import DetailsPageMadrid from './pages/DetailsPage/DetailsPageMadrid';
import DetailsPageAmsterdam from './pages/DetailsPage/DetailsPageAmsterdam';
import DetailsPageBerlin from './pages/DetailsPage/DetailsPageBerlin';
import DetailsPageLondon from './pages/DetailsPage/DetailsPageLondon';
import DetailsPageMoscow from './pages/DetailsPage/DetailsPageMoscow';
import DetailsPageParis from './pages/DetailsPage/DetailsPageParis';
import DetailsPageRoma from './pages/DetailsPage/DisplayPageRoma';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/details-amsterdam">
          <DetailsPageAmsterdam />
        </Route>
        <Route path="/details-berlin">
          <DetailsPageBerlin />
        </Route>
        <Route path="/details-london">
          <DetailsPageLondon />
        </Route>
        <Route path="/details-madrid">
          <DetailsPageMadrid />
        </Route>
        <Route path="/details-moscow">
          <DetailsPageMoscow />
        </Route>
        <Route path="/details-paris">
          <DetailsPageParis />
        </Route>
        <Route path="/details-roma">
          <DetailsPageRoma />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
