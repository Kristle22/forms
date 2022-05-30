import { useRef, useState } from 'react'

function Skaiciai() {
  const [number1, setNumber1] = useState(100)
  const [number2, setNumber2] = useState(50)
  console.log(number1, number2)

  // const input1 = useRef()
  // const input2 = useRef()

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
      <input
        // ref={input1}
        type='text'
        value={number1}
        onChange={inputNumber1}
        style={{ width: '50px' }}
      />
      <br />
      <input
        // ref={input2}
        type='text'
        value={number2}
        onChange={inputNumber2}
        style={{ width: '50px' }}
      />
    </>
  )
}

export default Skaiciai
