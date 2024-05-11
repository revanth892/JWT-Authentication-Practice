import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BaseLayout from './BaseLayout';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login';
// import FirstPage from './Pages/FirstPage';
import AccountList from './components/AccountList';
import Profile from './components/Profile';
import {legacy_createStore as createStore} from 'redux'
import reducer from './store/reducer'
import {Provider} from 'react-redux'
import setAuthenticationHeader from './utils/setAuthenticationHeader';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(reducer)

const token = localStorage.getItem("jsonwebtoken")

setAuthenticationHeader(token)

if(token)
  {
    store.dispatch({type:'ON_LOGGED_IN '})
  }
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>  
      <BaseLayout>
        <Routes>
          <Route exact path='/' Component={Login} />
          <Route exact path='/accounts' Component={AccountList} />
          <Route exact path='/profile' Component={Profile} />
        </Routes>
      </BaseLayout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
