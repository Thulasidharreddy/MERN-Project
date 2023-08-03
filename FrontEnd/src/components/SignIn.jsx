import style from "./signIn.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Signin = () => {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("")
    let navigate = useNavigate();

    let signup = () => {
        navigate('/signup')
    }

    let setemail = (e) => {
        setEmail(e.target.value);
    }
    let setpassword = (e) => {
        setPassword(e.target.value);
    }

    let signin = (e) => {
        e.preventDefault();
        console.log(email + " " + password);

        let data = { email, password };
        axios.post('http://localhost:4001/login', data)
            .then((res) => {
                // navigate('/signup');
                if (res.data.status === 200) {
                    alert(res.data.message);
                    navigate('/home',{ state: { user: res.data.userData}});
                    console.log("going to Home");
                } else {
                    alert(res.data.message)
                }
            })
    }

    return (
        <section className={style.background} >
            <section className={style.main}>
                <h1>Sign-In</h1>
                <div className={style.input}>
                    <h6><label htmlFor="">USERNAME</label></h6>
                    <input type="text" value={email} onChange={setemail} />
                    <h6><label htmlFor="">PASSWORD</label></h6>
                    <input type="password" value={password} onChange={setpassword} />
                    <div className={style.checkbox}>
                        <input type="checkbox" name="" id="" />
                        <label>Keep me Signed </label>
                    </div>
                </div>
                <div className={style.btn}>
                    <button onClick={signin}>SIGN IN</button>
                </div>
                <div className={style.inup}>
                    <button onClick={signup} > New User </button>
                </div>
                <div className={style.forgot}><a href="">Forgot Password?</a></div>
            </section>
            <hr />
        </section>
    )
}
export default Signin;