import React, { useState } from 'react';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {
    setUsersList(prevUsers => {
      return [{ name: name, age: age, id: Math.random().toString() }, ...prevUsers];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
