import Startpage from './Startpage';
import './App.css';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
<Routes>
  <Route path='/verify/0x652c0E3d583A43C6230eb2a8e9C9634e0deD7765' element={<Startpage/>}/>
</Routes>
    </div>
  );
}

export default App;
