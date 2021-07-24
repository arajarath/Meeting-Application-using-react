import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetups from "./pages/NewMeetups";
import { Route, Switch } from "react-router-dom";
import Layouts from "./components/layouts/Layouts";

function App() {
  return (
    <div className="App">
      <Layouts>
        <Switch>
          <Route path="/" exact>
            <AllMeetups />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
          <Route path-="/new-meetups">
            <NewMeetups />
          </Route>
        </Switch>
      </Layouts>
    </div>
  );
}

export default App;
