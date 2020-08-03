import React, { useState, useEffect, useCallback } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import FavoriteAdd from './comps/Favorite/FavoriteAdd'
import SearchByIngredient from './comps/SearchByIngredient/index'
// import SearchTag from './comps/SearchByIngredient/SearchTag'
import RecipeGrid from './comps/RecipeGrid';

import './index.scss';
// import './comps/Auth/Auth.scss';

import NavBar from './comps/NavBar/NavBar';
import Header from './comps/Header/Header';
import SignUp from './comps/Auth/SignUp'
import SignIn from './comps/Auth/SignIn'
import Logout from './comps/Auth/Logout'

import { projectAuth, onAuthStateChange } from './firebase/config';

import Favorite from '../src/comps/Favorite/Favorite'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {logout, login}  from './helper/authApi'
import { useCurrentUser } from './hooks/userAuth';

const defaultUser = { loggedIn: false, email: "" };
const UserContext = React.createContext(defaultUser);
const UserProvider = UserContext.Provider;


function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [searchTags, setSearchTags] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [user, setUser] = useState({ loggedIn: false });

  // listen to auth state change
  useCurrentUser(setUser);

  // listen to acition events from login and logout componenet
  const requestLogin = useCallback((email, password) => {
    login(email, password);
  });

  const requestLogout = useCallback(() => {
    logout();
  }, []);

  return (
    <div className="App">

      { !user.loggedIn && <Header /> }

      <Router>

        {projectAuth.currentUser && <NavBar />}

        <div className="auth-wrapper">
          <Switch>
            <Route path="/signin">
              { !user.loggedIn && <SignIn onClick={requestLogin} /> }
            </Route>

            <Route path="/signup">
              { !user.loggedIn && <SignUp onClick={requestLogin} /> }
            </Route>

            <Route path="/logout">
              { user.loggedIn && <UserProvider value={user}>
                  <Logout
                    onClick={requestLogout}
                    UserContext={UserContext}
                  />
                </UserProvider> }
            </Route>

            <Route path="/search">
              <SearchByIngredient
                // searchTags={searchTags}
                // setSearchTags={setSearchTags}
                setRecipes={setRecipes}
                recipes={recipes}
              />
            </Route>



            <Route path="/favorites">
              <Favorite />
            </Route>

          </Switch>
        </div>
      </Router>

      {/* { <Title/> } */}



      {/* <FavoriteAdd/> */}
      {/* <UploadForm /> */}
      {/* <ImageGrid setSelectedImg={setSelectedImg} /> */}
      {/* { selectedImg && <Modal  setSelectedImg={setSelectedImg} /> } */}

      {/* { recipes && <RecipeGrid recipes={recipes} setSelectedImg={setSelectedImg} /> } */}
      {/* { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> } */}

    </div>
  );
}

export default App;
