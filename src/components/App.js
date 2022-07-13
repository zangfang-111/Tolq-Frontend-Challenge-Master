import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Translate from "./translate";

const RootRoutes = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Translate />} />
    </Routes>
  </Router>
);

export default RootRoutes;
