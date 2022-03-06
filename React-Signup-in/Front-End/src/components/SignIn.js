import './signin.css';
import './signup.css';
import Inputform from './Inputform';
import { useState } from "react";

const SignIn = () => {

const [values, setValues] = useState({
    username: "",
    password: "",
  });

const inputs = [
    {
      id: "Username-signin",
      name: "username",
      type: "text",
      className: "username-signin",
      placeholder: "Type Your Username",
      errorMessage:
        "Username shouldn't include any special character!",
      htmlFor: "Username",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: "Password-signin",
      name: "password",
      type: "password",
      className:"password-signin",
      placeholder: "Type Your Password",
      errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      htmlFor: "Password",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
   
  ];
const handleSubmit = (e)=>{
  e.preventDefault();     // prevent from refresh
}
const onChange = (e)=>{
   setValues({...values,[e.target.name]: e.target.value});
}

return (

  <div className='Sign-form'>
    <div  id='Signin-Form'>
     <form onSubmit={handleSubmit} id = "Signin-form">

     <h1>Sign in</h1>
     <hr/>
    {inputs.map((input) =>  (

     <Inputform key ={input.id}   {...input} value={values[input.name]} onChange={onChange}/> 
     
    ))}
    <div id = 'Signin-button'>
    <button className="signin-button"  type = "submit">Sign in</button>
    </div>

    <div id="Signup-link"> Not a member ? <a href ='/signup'>SignUp</a>
    &nbsp;&nbsp;&nbsp;Forget Password ? <a href = '/'>Click Here</a></div>

    </form>
  
    </div>
  </div>
  );

};

export default SignIn;
