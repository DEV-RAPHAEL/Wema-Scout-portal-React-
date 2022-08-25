import './App.css'
import Form from './Components/forms'
import BG from './assets/bg.jpg'
function App() {

  return (
    <div className="App">
      <div  className='bgimg'>
        <img src={BG} alt="" />
      </div>
      <Form/>
    </div>
  )
}

export default App
