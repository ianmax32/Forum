import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import ThreadDisplay from './ThreadDisplay/Components/ThreadDisplay'
import NavBar from './NavBar'
import Footer from './Footer'
import {BrowserRouter,Route} from 'react-router-dom'

import QuestionsDisplay from './Questions/Components/QuestionsDisplay'


class App extends React.Component{
   render(){
     return(
       <div className='App'>
         <NavBar />
         <BrowserRouter>
           <Route path={'/'} exact component={QuestionsDisplay} />
           <Route path={'/answer'} component={ThreadDisplay} />
         </BrowserRouter>
         
        <Footer />
        </div>
       )
   }
}

export default App;
