import React, {Fragment} from 'react';
import {Routes, Route} from 'react-router-dom'

import './App.css';
import Home from './component/Home/Home';
import SignUp from './component/SignUp/SignUp';
import SignIn from "./component/SignIn/SignIn"
import Error404 from './component/Error404/Error404';
import Detail from './component/Detail/detail';
import CreateContent from './component/CreateContent/CreateContent';
import Users from './component/Admin/DashBoard/Users';
import Private from './Utils/Private';
import PrivateAdmin from './Utils/PrivateAdmin';
import EditUser from './component/Admin/EditUser/EditUser';
import UpComing from './component/UpComing/UpComing';

function App() {
  return (
    <Fragment>
        <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route path='/home' element={<Private><Home/></Private>}/>
          <Route path='/home/:id' element={<Private><Detail/></Private>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/create' element={<PrivateAdmin><CreateContent/></PrivateAdmin>}/>
          <Route path='/admin/user' element={<PrivateAdmin><Users/></PrivateAdmin>}/>
          <Route path='/admin/user/:id' element={<EditUser/>}/>
          <Route path='/upComingMovies' element={<PrivateAdmin><UpComing/></PrivateAdmin>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
    </Fragment>
  );
}

export default App;
