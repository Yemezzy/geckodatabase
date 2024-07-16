import Startpage from './Startpage';
import './App.css';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
<Routes>
  <Route path='/verify/people/0xEa2F49A2e6E27b7B47cBEf50AFf5Af11350108D1' element={<Startpage/>}/>
</Routes>
    </div>
  );
}

export default App;
