import Button from "../Button/Button"
import styles from "./ContactForm.module.css"
import { MdMessage } from "react-icons/md"
import {MdCall} from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [text,setText] = useState("");


    const handleSubmit=(e)=>{
        e.preventDefault();
        setName(e.target[0].value);
        setEmail(e.target[1].value);
        setText(e.target[2].value);
    }



  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.form_container}`}>
            <div className={`${styles.topbtn}`}>
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>} isOutline={true} />
                <Button text="VIA CALL" icon={<MdCall fontSize="24px"/>} isOutline={true}/>
            </div>
            <Button text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>} isOutline={false}/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"/>
                </div>
                <div>
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" name="email"/>
                </div>
                <div>
                    <label htmlFor="text">Text</label>
                    <textarea rows="8" name="text"/>
                </div>
                <div className={`${styles.btn}`}>
                    <Button text="SUBMIT" isOutline={true} />
                </div>
            </form>
            <div>
                <p>{name + " "+email+" "+text}</p>
            </div>
        </div>
        <div>
            <img src="/images/contact.svg" alt="contact"/>
        </div>

    </div>
  )
}

export default ContactForm