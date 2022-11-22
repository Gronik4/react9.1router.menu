import './css/App.css';
import './css/stamp.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { HomePage } from './components/HomePage';
import { DriftPage } from './components/DriftPage';
import { TimeAttackPage } from './components/TimeAttackPage';
import { ForzaPage } from './components/ForzaPage';
import { NonPage } from './components/NonPage';

function App(props) {
  return (
    <Router>
      <div className='App'>
        <Menu/>
        <div className="page">
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/drift" element={<DriftPage/>} />
            <Route path="/timeattack" element={<TimeAttackPage/>} />
            <Route path="/forza" element={<ForzaPage/>} />
            <Route path='*' element={<NonPage/>}/>
          </Routes>
        </div>
      </div>  
    </Router>
  );
}

export default App;
