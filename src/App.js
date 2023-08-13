import Login from "./components/login";
import Join from "./components/join";
import Study from "./components/study";
import Space from "./components/space";
import LandingPage from "./components/landingPage";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Forgetpassword from "./components/forgetpassword";
import MyCalendar from "./components/MyCalendar";
import User from "./components/user";
import { Route, Routes } from "react-router-dom";

function App() {
  const [showLoading, setIsShowLoading] = useState(true);
  setTimeout(() => {
    setIsShowLoading(false);
  }, 900);
  /*let Component;
  switch (window.location.pathname) {
    case "/login":
      Component = Login;
      break;
    case "/join":
      Component = Join;
      break;
    case "/study":
      Component = study;
      break;
    case "/space":
      Component = Space;
      break;
    case "/ForgetPassword":
      Component = Forgetpassword;
      break;
    case "/MyCalendar":
      Component = MyCalendar;
      break;
    case "/User":
      Component = User;
      break;
    default:
      Component = LandingPage;
      break;
  }*/
  return (
    <>
      {showLoading ? (
        <ClipLoader
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          color="#ff5f5f"
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/study" element={<Study />} />
          <Route path="/space" element={<Space />} />
          <Route path="/ForgetPassword" element={<Forgetpassword />} />
          <Route path="/MyCalendar" element={<MyCalendar />} />
          <Route path="/User" element={<User />} />
        </Routes>
      )}
    </>
  );
}

export default App;
