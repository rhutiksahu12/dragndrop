import { useState } from 'react'
import './App.css'
import { DndProvider } from "react-dnd"
import { HTML5Backend } from 'react-dnd-html5-backend'
import DragNDrop from './components/DragNDrop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-screen w-screen ">
        <DragNDrop />
      </div>
    </DndProvider>
  )
}

export default App
