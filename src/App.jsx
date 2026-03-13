import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState("")

  const handleClick = (value) => {
    if (value === "=") {
      try {
        // eval es aceptable para ejercicios escolares sencillos
        setDisplay(eval(display).toString())
      } catch {
        setDisplay("Error")
      }
    } else if (value === "C") {
      setDisplay("")
    } else {
      setDisplay(display + value)
    }
  }

  const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+", "C"]

  return (
    <div className="calculator">
      <div className="display">{display || "0"}</div>
      <div className="buttons">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App