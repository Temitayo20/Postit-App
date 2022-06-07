import "./App.css";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Stories from "./Stories";
import Welcome from "./Welcome";
import CreateStory from "./CreateStory";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>

          <Route path="SignIn" element={<SignIn />}></Route>
          <Route path="SignUp" element={<SignUp />}></Route>
          <Route path="Stories" element={<Stories />}></Route>
          <Route path="Welcome" element={<Welcome />}></Route>
          <Route path="CreateStory" element={<CreateStory />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
