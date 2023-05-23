import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout';
import Public from './components/Public';
import DashLayout from './components/DashLayout';
import Login from './Features/auth/Login';
import Welcome from './Features/auth/Welcome';
import NoteList from './Features/notes/NoteList';
import UserList from './Features/users/UserList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route index element={<Public />} />
      <Route path='login' element={<Login />} />

      <Route path='dash' element={<DashLayout />} >
        <Route index element={<Welcome />} />
        <Route path='notes'>
          <Route index element={<NoteList />} />
        </Route>{/*end note*/}
        <Route path='users'>
          <Route index element={<UserList />} />
        </Route>{/* end user*/ }
      </Route>{/* enddash */}      
    </Routes>
  );
}

export default App;
