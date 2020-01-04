import React,{useState} from 'react' 
import React from "react"
    const[input,setInput] =useState({
    name:null,
    "email":null,
     "message" :null,
})


return (
    <form name="contact" method="POST" data-netlify="true">
    <p>
      <label>Your Name: <input type="text" name="name" /></label>   
    </p>
    <p>
      <label>Your Email: <input type="email" name="email" /></label>
   
      <label>Message: <textarea name="message"></textarea></label>
    </p>
    <p>
      <button  type="submit">Send</button>
    </p>
  </form>
   )

   