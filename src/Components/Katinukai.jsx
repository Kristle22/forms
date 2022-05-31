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

  // let sum = useRef(0)
  const [sum, setSum] = useState(0)

  const render = () => {
    // sum.current += Number(weight)
    // const entry = [name, weight]
    setList((l) => [...l, [name, weight]])
    setSum((prev) => prev + Number(weight))
  }

  useEffect(() => {
    console.log(
      'pirmas efektas: ',
      JSON.parse(localStorage.getItem('Katinukai'))
    )
    const unchangedList = JSON.parse(localStorage.getItem('Katinukai'))
    if (unchangedList) setList(unchangedList)
  }, [])

  useEffect(() => {
    console.log('antras efektas: ', list)
    if (list?.length) {
      localStorage.setItem('Katinukai', JSON.stringify(list))
    }
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
      <div>
        <h2>Katinuku sarasas:</h2>
        <div>
          {list
            ? list.map((el, i) => <div key={i}>{el.join(': ')}</div>)
            : null}
        </div>
        <h3>Bendras katinuku svoris: {sum}</h3>
      </div>
    </>
  )
}
export default Katinukai
