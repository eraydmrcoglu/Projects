import { useState } from 'react';
import ColorContainer from './ColorContainer';
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/notes/noteSlice';

function Form() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [color, setColor] = useState('#3FC1C9');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim())
      return alert('Please fill in all fields');
    await dispatch(addNote({ title, body, color }));
    setTitle('');
    setBody('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <ColorContainer setBody={setBody} setColor={setColor} body={body} />
    </form>
  );
}

export default Form;