import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase.js";
import "../style/login.css";


const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    
    const signIn = e => {
        e.preventDefault();
        
         auth.signInWithEmailAndPassword(email,password).then((auth)=>{
            if(auth){
                navigate("/");
            }
        }).catch(error => alert(error.message));
        
    }

    const signUp = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            if(auth){
                navigate("/");
            }
        }).catch(error => alert(error.message));

    }
    


    return (
        <div className="login">
            
        <Link exact to="/">
        <img 
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
        alt="logo" 
        className="login-logo"/>
        </Link>

        <div className="login-container">
            <h1>Sign-in</h1>

            <form action="">

                <label htmlFor="user">
                    <h5>Email</h5>
                    <input type="text" name="username" id="user" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </label>

                <label htmlFor="password">
                    <h5>Password</h5>
                    <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </label>

                <button type="submit"  onClick={signIn} className="signIn-btn">Sign in</button>
            </form>
            <p>
               By continuing, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Notice.</span>
            </p>
            
        </div>
        <div className="create-account">
            <button className="signUp-btn" onClick={signUp}>Creat Your Amazon Account</button>
        </div>

        </div>
    )
}

export default Login;
