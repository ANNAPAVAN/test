import React from 'react';
import {useState} from 'react';
import emailjs from "emailjs-com"

const Lab7 = () => {
    const [mail,setmail] = useState();
    const [name,setname] = useState();
    const [message,setmessage] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const templateparameters = {
            to_name : name,
            message : message,
            from_name : "ANNA PAVAN",
            reply_to : mail
        }
        emailjs.send("service_4ns8h3o","template_8lhnp1p",templateparameters,"kSXhQnh9ocv0K4_es")
        .then((data)=>{
            console.log(data);
            console.log("Email sent successfully")
            alert("Email sent successfully")
        })
        .catch((err)=>{
            console.log("Error occrured");
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Enter name : </label>
                <input type="text" name="" id="" value={name} onChange={(e)=>setname(e.target.value)}/>
                <br />
                <label htmlFor="">Enter Your mailId</label>
                <input type="email" name="" id="" value={mail} onChange={(e) => setmail(e.target.value)}/>
                <br />
                <label htmlFor="">Enter your message</label>
                <textarea name="" id="" cols="30" rows="10" onChange={(e) => setmessage(e.target.value)}></textarea>
                <input type="submit" value="Send mail" />
            </form>
        </div>
    );
}

export default Lab7;