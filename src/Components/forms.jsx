import { useState } from 'react'
import './style/form.css'
import './style/button/button.css'
import './style/button/button.css.map'
import logo from '../assets/logo.png'
import { PersonalInfo,Step2, Images, FinalInfo } from '../Components'
const Form = () => {
    const [Page, setPage ] = useState(0)
    const [FormData, setFormData] = useState({
        email:""
    })

    const Pages = () =>{
        if (Page == 0){
            return <PersonalInfo/>;
        }
        else if (Page === 1){
            return <Step2/>;
        }
        else if (Page === 2 ){
            return <Images/>
        }

        else{
            return <FinalInfo/>
        }
    }
    const formTitles = 
    ["Step 1",
    "Step 2", 
    "Step 3",
     "Step 4"]
     const formInfo = [
        "Please fill in your Personal Info",
        "Some More Info", 
         "Upload your passport (In neck tie or Uniform if available)",
        "Yes, FInally"
     ]
     
  
  return (
    <div className='form'>
        <div className='progressbar'>
            <div style={{width: Page === 0? "25%" : Page === 1? "50%" : Page === 2? "75%" : "100%"}}></div>
        </div>
        <div className='formContainer'>
        <div className='header'>
         <center><h2>{formTitles[Page]}</h2></center>
         <center><h5>{formInfo[Page]}</h5></center>

        </div>
        <div className='body'>
           <Pages/>
        </div>
        <div className='footer'>
            <button className='button' class disabled={Page < 1} onClick={() => {setPage((Current) => Current -1);}}>Back</button>
            <button disabled={Page== formTitles.length -1} onClick={() => {setPage((Current) => Current +1);}}>Next</button>
        </div>
        </div>
    </div>

  )
}

export default Form