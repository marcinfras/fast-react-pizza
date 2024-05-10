import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';

function CreateUser() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateName(name));
    navigate('/menu');
  };

  return (
    <form
      className="mt-5 flex flex-col items-center gap-5 md:mt-6 md:gap-6"
      onSubmit={handleSubmit}
    >
      <p className="text-sm tracking-wider md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>
      <input
        className="input mb-3 w-[250px] md:w-[300px]"
        placeholder="Your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name.trim().length > 0 && <Button type="primary">Start ordering</Button>}
    </form>
  );
}

export default CreateUser;
