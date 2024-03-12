import {BrowserRouter as Router, Route,Routes} from 'react-router-dom' 
import Home from './assets/pages/Home.jsx';
import PrimaryPage from './assets/pages/PrimaryPage.jsx';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/primarypage" element={<PrimaryPage/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
