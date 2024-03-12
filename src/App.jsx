import "./App.css"
import Home from "./components/Home";
import Header from "./components/Header";
import Articles from "./components/Articles";
import {Routes, Route} from "react-router-dom";
import Users from "./components/Users";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/users" element={<Users />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
