import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Post from "./components/Post";
import Posts from "./components/Posts";
import Dashboard from "./components/Dashboard";
import Dashboard2 from "./components/Dashboard2";
import Login from "./components/Login";
import PrivateOutlet from "./components/PrivateOutlet";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Navigate to="/hello" /> } />
        <Route path="/hello/*" element={ <Hello /> }>
          <Route path="world" element={ <p>This is world!</p> } />
        </Route>
        <Route path="/posts/" element={ <Posts /> } />
        <Route path="/posts/:postId" element={ <Post /> }/>
        <Route path="/login" element={ <Login /> } />

        <Route path="/*" element={ <PrivateOutlet/> }>
          <Route path="dashboard" element={ <Dashboard title="Props" /> } />
          <Route path="dashboard2" element={ <Dashboard2 /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
