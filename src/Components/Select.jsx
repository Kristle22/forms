import { useState, useRef } from 'react'

function Select() {
  const [select, setSelect] = useState('')
  const [text, setText] = useState('')

  console.log(select, text)

  const input = useRef()
  console.log(input.current)

  const changeColor = (e) => {
    setSelect((input.current.style.color = e.target.value))
  }

  const changeFontSize = (e) => {
    setSelect((input.current.style.fontSize = e.target.value))
  }

  const changeFont = (e) => {
    setSelect((input.current.style.fontFamily = e.target.value))
  }

  const inputText = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <select value={select} onChange={changeColor}>
        <option value='red'>Red</option>
        <option value='blue'>Blue</option>
        <option value='yellow'>Yellow</option>
        <option value='orange'>Orange</option>
        <option value='green'>Green</option>
      </select>
      <select value={select} onChange={changeFontSize}>
        <option value='14px'>14px</option>
        <option value='20px'>20px</option>
        <option value='24px'>24px</option>
        <option value='30px'>30px</option>
        <option value='34px'>34px</option>
      </select>
      <select value={select} onChange={changeFont}>
        <option value='Arial'>Arial</option>
        <option value='Times New Roman'>Times New Roman</option>
        <option value='monospace'>monospace</option>
        <option value='fantasy'>fantasy</option>
        <option value='cursive'>cursive</option>
      </select>
      <div>
        <h3>Iveskite teksta: </h3>
        <input
          ref={input}
          type='text'
          value={text}
          onChange={inputText}
          style={{
            height: '50px',
            width: '300px',
            fontFamily: '',
          }}
        />
      </div>
    </div>
  )
}

export default Select
