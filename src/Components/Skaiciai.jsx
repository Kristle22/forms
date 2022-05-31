import { useState } from 'react'

function Skaiciai() {
  const [number1, setNumber1] = useState(100)
  const [number2, setNumber2] = useState(50)
  console.log(number1, number2)

  const inputNumber1 = (e) => {
    setNumber1(e.target.value)
    setNumber2(e.target.value / 2)
  }
  const inputNumber2 = (e) => {
    setNumber1(e.target.value * 2)
    setNumber2(e.target.value)
  }

  return (
    <>
      <label>Sis skaicius yra dvigubai didesnis uz antra:</label>
      <input
        type='text'
        value={number1}
        onChange={inputNumber1}
        style={{ width: '50px' }}
      />
      <br />
      <label>Sis skaicius yra perpus mazesnis uz pirma:</label>
      <input
        type='text'
        value={number2}
        onChange={inputNumber2}
        style={{ width: '50px' }}
      />
    </>
  )
}

export default Skaiciai
