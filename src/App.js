import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<About />} path="/about" />
        <Route element={<SinglePost />} path="/post/:slug" />
        <Route element={<Post />} path="/post" />
        <Route element={<Project />} path="/project" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
