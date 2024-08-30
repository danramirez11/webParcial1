import { useState } from 'react'
import SideBar from './components/SideBar/SideBar'
import SelectSection from './components/SelectSection/SelectSection'
import './App.css'
import planDeViajes from './data/data'

function App() {
  const [ selections, setSelections ] = useState({
    alimentacion: {},
    hoteles: {},
    destinosdla: {}
  })

  const handleSelection = (selected) => {
    setSelections({
      ...selections,
      [selected.section]: selected.selected
    })
  }

  return (
    <>
      <SideBar selected={selections}
      />
      <section>
        <h1>Escoge tu plan ideal</h1>
        {Object.keys(planDeViajes).map((item, index) => (
          <SelectSection 
            state = {selections}
            key={index} 
            section={planDeViajes[item]} 
            onSelected={handleSelection} 
            title = {Object.keys(planDeViajes)[index]}></SelectSection>
        ))}
      </section>
    </>
  )
}

export default App
