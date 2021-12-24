import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import { useRef, useState } from 'react';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = event => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.toString().trim().length === 0) {
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

    props.onAddUser(enteredName, enteredAge);
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
          <input id="username"
                 type="text"
                 ref={nameInputRef} />

          <label htmlFor="age">Age (Years)</label>
          <input id="age"
                 type="number"
                 ref={ageInputRef} />

          <Button type="submit">Add user</Button>
        </form>
      </Card>;
    </div>
  )
    ;

};

export default AddUser;