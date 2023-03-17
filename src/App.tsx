import React from "react";

import * as ST from "./styled";

import "./styled";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Task1 from "./pages/Task1/Task1";
import Task2 from "./pages/Task2/Task2";
import Task3 from "./pages/Task3/Task3";
import Header from "./components/Header/Header";
import Task4 from "./pages/Task4/Task4";
import Task5 from "./pages/Task5/Task5";
import Task6 from "./pages/Task6/Task6";
import Task7 from "./pages/Task7/Task7";

function App() {
  return (
    <BrowserRouter>
      <ST.App>
        <Header />
        <Routes>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task4" element={<Task4 />} />
          <Route path="/task5" element={<Task5 />} />
          <Route path="/task6" element={<Task6 />} />
          <Route path="/task7" element={<Task7 />} />
        </Routes>
      </ST.App>
    </BrowserRouter>
  );
}

export default App;
