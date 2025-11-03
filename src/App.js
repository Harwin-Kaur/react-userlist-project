import './App.css';
import  { UserForm }  from './components/UserForm';
import { UserTable } from './components/UserTable';

const App = () => {

  const addUser = (userObj) => {
    console.log(userObj);
  };
   
    return ( 
    <div className='container pt-4'>
      <h2 className='text-center'>User List</h2>
      <hr />
      {/* form component here */}
      <UserForm addUser={addUser}/>

      {/* table component here */}
      <UserTable />
    </div>
    );
}

export default App;
