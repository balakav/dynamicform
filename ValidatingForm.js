import { useState,useEffect } from 'react';
import './ValidatingForm.css'
function ValidatingForm() {
    const initValues={username:'',email:'',password:''}
    const [formValues,setFormValues]=useState(initValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleChange=(event)=>{
        const{id,value}=event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    const validate=(values)=>{
        const errors={};
        const reg=new RegExp("[0-9]")
        const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 

        if(!values.username)
        errors.username="Plese Fill the column";
        else if(values.username.length<5)
        errors.username="Username must have minimum 5 characters";
        else if(reg.test(values.username))
        errors.username="Username must contain only alphabets";

        if(!values.email)
        errors.email="Invailed Email";
        
        if(!values.password)
        errors.password="Plese Fill the column";
        else if(!preg.test(values.password))
        errors.password="Format of Password is not corrcet";
        return errors;
    }

    return ( 
        <>
        <body>
        <div className='container'>
            {/* {
                Object.keys(formErrors).length===0 && isSubmit?
                (<h1 style={{background:"green",color:"white"}}>Signed In Successfully</h1>)
                :(<pre>{JSON.stringify(formValues,undefined,3)}</pre>)
            } */}
            <center>
        <form onSubmit={handleSubmit}>
            <h1>DYNAMIC FORM</h1>
            <div className='box1'>
            <div className='row'>
                <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter Your User Name</label><br></br>
                <input type="text" id='username' className='ibox' placeholder='Your User name' value={formValues.username}
                    onChange={handleChange}/><br></br><br></br><br></br>
            </div>
            <p  style={{color:"red"}}>{formErrors.username}</p>

            <div className='row'>
                <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter your E-mail</label><br></br><br></br>
                <input type="email" id='email' className='ibox' placeholder='Your email' value={formValues.email}
                    onChange={handleChange}/><br></br><br></br>
            </div>
            <p  style={{color:"red"}}>{formErrors.email}</p>

            <div className='row'>
                <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter Your Password</label><br></br>
                <input type="password" id='password' className='ibox' placeholder='Your Password' value={formValues.password}
                    onChange={handleChange}/><br></br><br></br><br></br><br></br>
            </div>
            <p  style={{color:"red"}}>{formErrors.password}</p>

            <div className='row'>
            <button class="button-85" role="button">Button 85</button>
            </div>
            </div>
        </form>
        </center>
        </div>
        </body>
        </>
     );
}

export default ValidatingForm