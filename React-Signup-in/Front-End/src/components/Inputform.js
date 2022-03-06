import "./inputform.css"
import { useState } from "react";
const Inputform = (props) => {

   const [focused,setFocused] = useState(false);
   const {label, errorMessage, onChange, id, ...inputProps } = props;
   
   const handleFocus = (e)=>{
      setFocused(true)
   };
   const onFocus = (e) => { 
      inputProps.name==="confirmPassword" && setFocused(true);
   };
return(
   
<div className="Inputform" id = {id}>
   
   <label className = {props.className} htmlFor={props.htmlFor}>{label}</label>

   <input {...inputProps}  onChange={onChange}
   onBlur={handleFocus}    onFocus={onFocus}
   focus={focused.toString()}  />
         <i className="fas fa-check-circle" id = {id}></i>
			<i className="fas fa-exclamation-circle" id = {id}></i>
   <span id = {id} >{errorMessage}</span>

</div>

)

}

export default Inputform;
