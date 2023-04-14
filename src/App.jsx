import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SignIn from "./components/SignIn";
import JobCard from "./components/JobCard";
import JobList from "./pages/JobList";
import AdminScreen from "./pages/Admin/AdminScreen";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={JobList} />
          <Route path="/signin" Component={SignIn} />
          <Route path="/job" Component={JobCard} />
          <Route path="/admin" Component={AdminScreen} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
