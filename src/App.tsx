import React, {useState} from 'react';

import * as ST from './styled'

import './styled';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Task1 from "./pages/Task1/Task1";
import Task2 from "./pages/Task2/Task2";
import Task3 from "./pages/Task3/Task3";



function App() {

    const [isActive, setIsActive] = useState(false)



  return (
      <BrowserRouter>
    <ST.App>
        <ST.Header>
            <ST.StyledLink to='/task1'>Task 1</ST.StyledLink>
            <ST.StyledLink to='/task2'>Task 2</ST.StyledLink>
            <ST.StyledLink to='/task3'>Task 3</ST.StyledLink>
        </ST.Header>
       <Routes>
        <Route path='/task1'
               element={<Task1/>}/>
           <Route path='/task2'
                  element={<Task2/>}/>
           <Route path='/task3'
                  element={<Task3/>}/>

       </Routes>
    </ST.App>
      </BrowserRouter>
  );
}

export default App;
