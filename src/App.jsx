import './App.css'
import { Pages } from './components/pages'
import { Tab } from './components/tab'

function App() {
  return (
    <>
      <div className='w-full h-full bg-slate-100'>
        <Tab/>
        <Pages/>
      </div>
    </>
  )
}

export default App
