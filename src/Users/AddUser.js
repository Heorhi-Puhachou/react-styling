import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState(0);
  const [error, setError] = useState();

  const addUserHandler = event => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.toString().trim().length === 0) {
      setError(
        {
          title: 'EMPTY!!!',
          message: 'DO NOT USE EMPTY VALUES!!!',
        },
      );
      return;
    }

    if (enteredAge < 0) {
      setError(
        {
          title: 'NEGATIVE!!!',
          message: 'RLY?!? NEGATIVE AGE!!!',
        },
      );
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
  };

  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />

          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" vlue={enteredAge} onChange={ageChangeHandler} />

          <Button type="submit">Add user</Button>
        </form>
      </Card>;
    </div>
  )
    ;

};

export default AddUser;