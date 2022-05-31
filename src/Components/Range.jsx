import { useState, useEffect } from 'react'

function Range() {
  const [kvadr, setKvadr] = useState([])
  const [plotis, setPlotis] = useState()
  const [aukstis, setAukstis] = useState()
  const [spalva, setSpalva] = useState()

  const ikeltiKvadr = () => {
    setPlotis('100px')
    setAukstis('100px')
    setSpalva('#2c2c3c')
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
    setKvadr((previous) => [...previous, [plotis, aukstis, spalva]])
    setPlotis()
    setAukstis()
    setSpalva()
  }

  useEffect(() => {
    const issaugotasKvadr = JSON.parse(
      localStorage.getItem('issaugoti kvadratai')
    )
    if (issaugotasKvadr) setKvadr(issaugotasKvadr)
  }, [])

  useEffect(() => {
    if (kvadr?.length) {
      localStorage.setItem('issaugoti kvadratai', JSON.stringify(kvadr))
    }
  }, [kvadr])

  return (
    <>
      <div style={{ display: 'flex' }}>
        {kvadr.map((k, i) => (
          <div
            key={i}
            className='kvd'
            style={{
              width: k[0],
              height: k[1],
              background: k[2],
            }}
          >
            Issaugotas kvadr.
          </div>
        ))}
      </div>
      {aukstis && plotis && spalva && (
        <div
          className='kvd'
          style={{
            width: plotis,
            height: aukstis,
            background: spalva,
          }}
        ></div>
      )}
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
