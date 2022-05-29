import { useState } from 'react'
import rand from '../FUNCTIONS/randNumbers'

function Kvadrateliai() {
  const [kvadr, setKvadr] = useState([])

  const pridetiKv = () => {
    for (let i = 0; i < number; i++) {
      setKvadr((k) => [...k, rand(100, 200)])
    }
  }

  const [number, setNumber] = useState()
  const inputNumber = (e) => {
    setNumber(e.target.value)
  }
  return (
    <>
      <div className='kvc'>
        {kvadr.map((kv, i) => (
          <div className='kv' key={i} style={{ background: 'red' }}>
            {kv}
          </div>
        ))}
      </div>
      <input
        type='text'
        value={number}
        onChange={inputNumber}
        style={{ width: '100px', fontSize: '30px' }}
      />
      <button onClick={pridetiKv}>Prideti</button>
    </>
  )
}
export default Kvadrateliai
