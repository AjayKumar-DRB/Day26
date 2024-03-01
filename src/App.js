import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import Navigator from './components/Navigator';
import All from './components/All';
import FSD from './components/FSD';
import DS from './components/DS';
import CS from './components/CS';
import Career from './components/Career';
import CardList from './cards/CardList';

function App() {
  return (
    <div>
      <Header/>

      <Router>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fsd" element={<FSD />} />
          <Route path='/data-science' element={<DS />}/>
          <Route path="/cyber-security" element={<CS />} />
          <Route path="/career" element={<Career />} />
        </Routes>

        <Navigator/>
        
        <Routes>
          <Route path="/" element={<CardList cardData={"all"} />} />
          <Route path="/fsd" element={<CardList cardData={"FSD"} />} />
          <Route path='/data-science' element={<CardList cardData={"DS"} />}/>
          <Route path="/cyber-security" element={<CardList cardData={"CS"} />} />
          <Route path="/career" element={<CardList cardData={"Career"} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
