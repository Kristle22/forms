import { useRef, useState } from 'react'

function Range() {
  const [kvadr, setKvadr] = useState([])
  const [plotis, setPlotis] = useState('100px')
  const [aukstis, setAukstis] = useState('100px')
  const [spalva, setSpalva] = useState('#2c2c3c')

  const square = useRef()
  console.log(square.current)

  const ikeltiKvadr = () => {
    setKvadr([kvadr])
    square.current.style.width = '100px'
    square.current.style.height = '100px'
    square.current.style.background = '#2c2c3c'
  }

  const keistiPloti = (e) => {
    setPlotis(`${e.target.value}px`)
  }

  const keistiAuksti = (e) => {
    setAukstis(`${e.target.value}px`)
  }

  const keistiSpalva = (e) => {
    setSpalva(e.target.value)
  }

  const nebekeisti = () => {
    square.current.style.width = plotis
    square.current.style.height = aukstis
    square.current.style.color = spalva
    // setPlotis((square.current.style.width = plotis))
    // setAukstis((square.current.style.height = aukstis))
    // setSpalva((square.current.style.color = spalva))
  }
  return (
    <>
      {kvadr.map((k, i) => (
        <div
          ref={square}
          key={i}
          className='kvd'
          style={{
            background: spalva,
            width: plotis,
            height: aukstis,
          }}
        >
          {k}
        </div>
      ))}
      <div>
        <label>Kvadrato plotis: </label>
        <input
          type='range'
          min='10'
          max='200'
          value={plotis}
          onChange={keistiPloti}
        />
      </div>
      <div>
        <label>Kvadrato aukstis: </label>
        <input
          type='range'
          min='10'
          max='200'
          value={aukstis}
          onChange={keistiAuksti}
        />
      </div>
      <div style={{ alignSelf: 'end' }}>
        <label htmlFor=''>Pasirinkite kvadrato spalva:</label>
        <input
          type='color'
          style={{
            width: '100px',
            height: '50px',
            margin: '20px',
          }}
          value={spalva}
          onChange={keistiSpalva}
        />
      </div>
      <div>
        <button onClick={ikeltiKvadr}>Sukurti</button>
        <button onClick={nebekeisti}>Issaugoti</button>
      </div>
    </>
  )
}

export default Range
