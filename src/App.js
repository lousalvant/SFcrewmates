import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import ReadPosts from './pages/ReadPosts';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import CharacterInfoPage from './pages/CharacterInfoPage'; // Import CharacterInfoPage
import { Link } from 'react-router-dom';

const App = () => {
 
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts data={null}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost />
    },
    {
      path:"/new",
      element: <CreatePost />
    },
    {
      path:"/character/:id",
      element: <CharacterInfoPage />
    }
  ]);

  return ( 
    <div className="App">
      <div className="header">
        <h1>Choose Your Character</h1>
        <img className="image" src="https://64.media.tumblr.com/8424ed498f63a0cbc78fc14dcd353f4c/tumblr_msh4luvxFW1scncwdo1_500.gif" alt="Street Fighter GIF" />
        <div className="buttons-container">
        <Link to="/"><button className="headerBtn"> Home  </button></Link>
        <Link to="/new"><button className="headerBtn"> Create </button></Link>
        </div>
      </div>
      {element}
    </div>
  );
}

export default App;
