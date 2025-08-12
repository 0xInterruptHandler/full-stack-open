import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick} style={{ marginRight: 8, padding: '8px 12px' }}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => (
  <div>
    <h2>Estadísticas</h2>
    <div>Good: {good}</div>
    <div>Neutral: {neutral}</div>
    <div>Bad: {bad}</div>
  </div>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Unicafe</h1>

      <h2>Give feedback</h2>
      <div style={{ marginBottom: 16 }}>
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
      </div>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
