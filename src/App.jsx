import './App.css'
import Kvadrateliai from './Components/Kvadrateliai'
import Katinukai from './Components/Katinukai'
import Skaiciai from './Components/Skaiciai'
import Select from './Components/Select'
import Range from './Components/Range'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2
          style={{
            background: 'crimson',
            padding: '10px',
            borderRadius: '20px',
          }}
        >
          1. Uzduotis
        </h2>
        <Kvadrateliai />
        <h2
          style={{
            background: 'crimson',
            padding: '10px',
            borderRadius: '20px',
          }}
        >
          2. Uzduotis
        </h2>
        <Katinukai />
        <h2
          style={{
            background: 'crimson',
            padding: '10px',
            borderRadius: '20px',
          }}
        >
          3. Uzduotis
        </h2>
        <Skaiciai />
        <h2
          style={{
            background: 'crimson',
            padding: '10px',
            borderRadius: '20px',
          }}
        >
          4. Uzduotis
        </h2>
        <Select />
        <h2
          style={{
            background: 'crimson',
            padding: '10px',
            borderRadius: '20px',
          }}
        >
          5. Uzduotis
        </h2>
        <Range />
      </header>
    </div>
  )
}

export default App
