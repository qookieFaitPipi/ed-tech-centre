import React from "react";

// react-router-dom
import { Routes, Route } from 'react-router-dom';

// pages
import Landing from "./Pages/Landing/Landing";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<><Landing /></>} />
    </Routes>
  );
}

export default React.memo(App);
