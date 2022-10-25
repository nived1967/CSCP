import {Routes,Route} from 'react-router-dom';
import {Home} from './routes/home/home.component';
import { Navigation } from './routes/navigation/navigation.component';
import {About} from './components/about/about.component';
import {Community} from './components/community/community.component';
import {Activities} from './components/activities/activities.component';
import {Contact} from './components/contact/contact.component';
import './App.css';

const App = () =>  {
  return (
    <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/community' element={<Community/>}/>
      <Route path='/activities' element={<Activities/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Route>
    </Routes>
  );
}

export default App;
