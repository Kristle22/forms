import { useEffect, useRef, useState } from 'react'

function Katinukai() {
  const [name, setName] = useState('')
  const inputName = (e) => {
    setName(e.target.value)
  }
  const [weight, setWeight] = useState('')
  const inputWeight = (e) => {
    setWeight(e.target.value)
  }

  const [list, setList] = useState([])

  list.sort((a, b) => b[1] - a[1])

  const entry = [name, weight]

  let sum = useRef(0)
  const render = () => {
    setList((l) => [...l, entry])
    sum.current += Number(weight)
  }
  console.log(sum.current)

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem('cat') ?? '[]'))
  }, [])

  useEffect(() => {
    if (null === list) {
      return
    }
    localStorage.setItem('cat', JSON.stringify(list))
  }, [list])

  return (
    <>
      <label>Katinuko vardas</label>
      <input type='text' value={name} onChange={inputName} />
      <label>Katinuko svoris</label>
      <input
        type='text'
        value={weight}
        onChange={inputWeight}
        style={{ width: '50px' }}
      />
      <button onClick={render}>Ivesti</button>
      <div
        style={{
          textAlign: 'left',
        }}
      >
        <h2>Katinuku sarasas:</h2>
        <div>
          {list.map((el, i) => (
            <div key={i}>{el.join(': ')}</div>
          ))}
        </div>
        <h3>Bendras katinuku svoris: {sum.current}</h3>
      </div>
    </>
  )
}
export default Katinukai
