import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./signUp.module.css";

const Signup=()=>{
    let navigate=useNavigate()

    let [first_name,setFirstName] = useState("");
    let [last_name,setLastName] = useState("");
    let [email_id,setEmail] = useState("");
    let [password,setPassword] = useState("");
    let [confirm_password,setConfPassword] = useState("");
    let firstName = (e)=> {
        setFirstName(e.target.value)
    }

    let lastName = (e) => {
        setLastName(e.target.value);
    }

    let email = (e) => {
        setEmail(e.target.value)
    }
    
    let passkey = (e) =>{
        setPassword(e.target.value)
    }
    let confirm_passkey = (e) => {
        setConfPassword(e.target.value)
    }

    let signup = (e) =>{
        e.preventDefault()
        let data = {first_name,last_name,email_id,password}
        if(first_name && email && (password == confirm_password) ) {
            console.log("true");
            axios.post('http://localhost:4001/signup',data)
            .then((res)=>{
                alert(res.data.message);
                console.log("got data");
                navigate('/');
            }).catch(()=>{
                console.log("Error posting data");
            })
        }else{
            alert('invalid credentials')
        }
    }

    let signin=()=>{
        navigate('/')
    }
    return(
        <div>
        <section className={style.background} >
            <section className={style.main}>
            <h1>Sign Up</h1>
                <div className={style.input}>
                    <h6><label htmlFor="">First Name</label></h6>
                    <input type="text" value={first_name} onChange={firstName}/>
                    <h6><label htmlFor="">Last Name</label></h6>
                    <input type="text" value={last_name} onChange={lastName}/>
                    <h6><label htmlFor=""> Email</label></h6>
                    <input type="email" value={email_id} onChange={email}/>
                    <h6><label htmlFor="">Password</label></h6>
                    <input type="text" value={password} onChange={passkey}/>
                    <h6><label htmlFor="">Confirm Password</label></h6>
                    <input type="text" value={confirm_password} onChange={confirm_passkey}/>
                </div>
                <div className={style.btn}>
                    <button onClick={signup}>SIGN UP</button>
                </div>
                <div className={style.inup}>
                    <button onClick={signin} > Already a User </button>
                </div>
                <hr />
            </section>
        </section>
        </div>
    )
}
export default Signup;