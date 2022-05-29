import { useEffect, useState } from 'react'

function Skaiciai() {
  const [number1, setNumber1] = useState(100)
  const [number2, setNumber2] = useState(50)
  console.log(number1, number2)

  const inputNumber = (e) => {
    setNumber1(e.target.value)
    setNumber2(e.target.value / 2)
  }
  // useEffect(() => {
  //   setNumber1((n) => n.forEach(n * 2))
  // })

  return (
    <>
      <input
        type='text'
        value={number1}
        onChange={inputNumber}
        style={{ width: '50px' }}
      />
      <br />
      <input
        type='text'
        value={number2}
        onChange={inputNumber}
        style={{ width: '50px' }}
      />
    </>
  )
}

export default Skaiciai
