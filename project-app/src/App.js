import './App.css';
import Todo from './components/Todo/Todo'
import Header from './components/Header/Header'


function App() {
  return (
    <div className="App">


      <h1 className="text-3xl text-center font-bold underline">
        Hello world!
      </h1>
      <button class="bg-blue-500 center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
        Button
      </button>
      <Header />
      <Todo />

    </div>
  );
}

export default App;
