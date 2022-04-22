import './styles/App.css'
import Todos from './components/Todos/Todos'
import Header from './components/Header/Header'
import { useEffect } from 'react'
import { keepTheme } from './utilities/Theme'


function App() {


  useEffect(() => {
    keepTheme();
  })

  return (
    <div className="App">
      <Header id="togglemode" />
      <main>
        <Todos />
      </main>
    </div>
  );
}

export default App;
