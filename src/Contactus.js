import { useRef } from "react";

export default function Contactus()
{
    let name = useRef('')
    let contact = useRef('')
    let message= useRef('')
    let msg = ()=>
    {
        alert(name.current.value+" thanks for contacting us ");
        name.current.value="";
        contact.current.value="";
        message.current.value="";
    }
    return(
        <>
        <div className="Contact">
        <div className="contactform">

        <p>
           <label> Name :</label> <input ref={name} type="text"></input>
        </p>
        <p>
            <label>Contact no  :</label> <input ref={contact} type="text"></input>
        </p>
       <p>
        <label>message :</label>
        <textarea></textarea>
       </p>
        <p>
<input type="button" value="contactus" onClick={()=>msg()} />
</p>

        </div>

        <div className="map">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112125.1908767117!2d77.16813589063254!3d28.572398662050663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2c210b8651b%3A0x63b04fa9ae97cba6!2sTCS%20TQS%20DELHI!5e0!3m2!1sen!2sin!4v1719035263429!5m2!1sen!2sin" width="600" height="450" 
         allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
        </>
    )
}