import Form from './components/Form/Form';
import NotesContainer from './components/Notes/NotesContainer';
function App() {
  return (
    <>
      <div className="container">
        <h1>Notes App</h1>
        <Form />
      </div>

      <NotesContainer />
    </>
  );
}

export default App;