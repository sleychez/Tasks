import React from 'react';

import * as ST from './styled'

import './styled';

import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Task1 from "./pages/Task1/Task1";
import Task2 from "./pages/Task2/Task2";

function App() {

  return (
      <BrowserRouter>
    <ST.App>
        <ST.Header>
            <ST.StyledLink to='/task1'>Task 1</ST.StyledLink>
            <ST.StyledLink to='/task2'>Task 2</ST.StyledLink>
        </ST.Header>
       <Routes>
        <Route path='/task1'
               element={<Task1/>}/>
           <Route path='/task2'
                  element={<Task2/>}/>
       </Routes>
    </ST.App>
      </BrowserRouter>
  );
}

export default App;
