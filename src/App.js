import Startpage from './Startpage';
import './App.css';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
<Routes>
  <Route path='/verify/0xdac17f958d2ee523a2206206994597c13d831ec7' element={<Startpage/>}/>
</Routes>
    </div>
  );
}

export default App;
