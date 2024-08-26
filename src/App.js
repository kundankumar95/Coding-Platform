import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Explore from './component/Explore/Explore';
import Problems from './component/Problems/Problems';
import Contest from './component/Contest/Contest';
import Discuss from './component/Discuss/Discuss';
import OnlineInterview from './component/OnlineInterview/OnlineInterview';
import Assessment from './component/Assessment/Assessment';
import Redeem from './component/Redeem/Redeem'
import Premium from './component/Premium/Premium'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/explore" element={<Explore />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/discuss" element={<Discuss />} />
        <Route path="/interview/online" element={<OnlineInterview />} />
        <Route path="/interview/assessment" element={<Assessment />} />
        <Route path="/store/redeem" element={<Redeem />} />
        <Route path="/store/premium" element={<Premium />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
    </Router>
  );
}

export default App;
