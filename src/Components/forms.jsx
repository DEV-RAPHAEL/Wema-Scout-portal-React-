import { useState } from 'react'
import './style/form.css'
import './style/button/button.css'
import logo from '../assets/logo.png'
import { PersonalInfo,Step2, Images, FinalInfo } from '../Components'
const Form = () => {
    const [Page, setPage ] = useState(0)
    const [FormData, setFormData] = useState({
        firstName:"",
        lastName:"",
        middleName:"",
        gender:"",
        address:"",
        phone:"",
        agent:'',
        dob:0,
        passport:"",
        signature:"",
        USSD:'True',
        email:"",
        subAgent:"",
        BVN:''
    })

    const Pages = () =>{
        if (Page == 0){
            return <PersonalInfo FormData={FormData} setFormData={setFormData}/>;
        }
        else if (Page === 1){
            return <Step2 FormData={FormData} setFormData={setFormData}/>;
        }
        else if (Page === 2 ){
            return <Images/>
        }

        else{
            return <FinalInfo FormData={FormData} setFormData={setFormData}/>
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
            <button  onClick={() => {
                if(Page== formTitles.length -1){
                    alert('Form Submitted')
                    console.log(FormData)
                }else{
                    setPage((Current) => Current +1);
                }
               }}>{Page === formTitles.length - 1 ? 'Submit':'Next'}</button>
        </div>
        </div>
    </div>

  )
}

export default Form