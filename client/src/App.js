import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './componenet/Home';
import Reads from './componenet/Reads';
import Updates from './componenet/Updates';
import Register from './componenet/Register';
import Pagenotfound from './componenet/Pagenotfound';
// import Search from './componenet/Search';
import SearchView from './componenet/SearchView';
import View from './componenet/View';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/registration' element={<Register/>}/>
      <Route path='/read' element={<Reads/>}/>
      <Route path='/update/:id' element={<Updates/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/search' element={<SearchView/>}/>
      <Route path='/*' element={<Pagenotfound/>}/>
      </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
