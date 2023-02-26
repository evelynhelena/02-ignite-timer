import { createContext, useContext, useState } from 'react'

interface CyclesContextProps {
  activeCycle: number
  setActiveCycle: (value: number) => void
}

const CyclesContext = createContext({} as CyclesContextProps)

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)
  return (
    <h1>
      NewCycleForm: {activeCycle}{' '}
      <button onClick={() => setActiveCycle(activeCycle + 1)}>Alterar</button>
    </h1>
  )
}

function CountDown() {
  const { activeCycle } = useContext(CyclesContext)
  return <h1>CountDown: {activeCycle}</h1>
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    <CyclesContext.Provider value={{ setActiveCycle, activeCycle }}>
      <NewCycleForm />
      <CountDown />
    </CyclesContext.Provider>
  )
}
