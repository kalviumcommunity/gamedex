import './Login.css';
import { FaFacebookF } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaGoogle } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import { useNavigate } from "react-router-dom";
import { authenticateSignup, authenticateLogin } from "../../Service/Api";


function Login() {

    const signUp = () => {
        document.querySelector(".container_login").classList.add("sign-up-mode");
        console.log('signUp')
    };

    const [isLoading, setIsLoading] = useState(true)

    const signIn = () => {
        document.querySelector(".container_login").classList.remove("sign-up-mode");
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 5000);
    }, [])

    const signupIntitialValues = {
        fristName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
    }

    const loginIntitialValues = {
        userName: '',
        password: '',
    }

    const [signup, setSignup] = useState(signupIntitialValues);
    const [login, setLogin] = useState(loginIntitialValues);
    const [error, setError] = useState(false);

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const signupUser = async (e) => {
        e.preventDefault();
        console.log(signup)
        let response = await authenticateSignup(signup);
        if (!response) return;
        else {
            window.location.reload();
        }
    }

    const loginUser = async (e) => {
        e.preventDefault();
        let response = await authenticateLogin(login);
        if (response.status == 200) {
            console.log(response);
        } else {
            setError(true);
        }
    }

    return ( isLoading ? (<Loading />) :

        <div className="container_login">
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" onChange={(e) => onValueChange(e)} name="userName" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" onChange={(e) => onValueChange(e)} name="password" placeholder="Password" />
                            </div>
                            { error && <p className='error'>Please enter a valid username or password</p>  }
                        <input type="submit" onClick={(e) => loginUser(e)} value="Login" className="btn-form solid" />
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <div className='button-social'>
                                <div className='outer-btn'>
                                    <div className="btn transparent-social">
                                        <button id="sign-up-btn" onClick={signIn}>
                                            <p className="social-icon">
                                                <FaFacebookF />
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='button-social'>
                                <div className='outer-btn'>
                                    <div className="btn transparent-social">
                                        <button id="sign-up-btn" onClick={signIn}>
                                            <p className="social-icon">
                                                <FaGithub />
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='button-social'>
                                <div className='outer-btn'>
                                    <div className="btn transparent-social">
                                        <button id="sign-up-btn" onClick={signIn}>
                                            <p className="social-icon">
                                                <FaGoogle />
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='button-social'>
                                <div className='outer-btn'>
                                    <div className="btn transparent-social">
                                        <button id="sign-up-btn" onClick={signIn}>
                                            <p className="social-icon">
                                                <FaLinkedin />
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <form action="#" className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className='form-name'>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" onChange={(e) => onInputChange(e)} name="fristName" placeholder="Fristname" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" onChange={(e) => onInputChange(e)} name="lastName" placeholder="Lastname" />
                            </div>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" onChange={(e) => onInputChange(e)} name="userName" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" onChange={(e) => onInputChange(e)} name="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" onChange={(e) => onInputChange(e)} name="password" placeholder="Password" />
                        </div>
                        <input type="submit" onClick={(e) => signupUser(e)} className="btn-form" value="Sign up" />
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <div className='button-social'>
                                <div className='outer-btn'>
                                    <div className="btn transparent-social">
                                        <button id="sign-in-btn" onClick={signIn}>
                                            <p className="social-icon">
                                                <FaFacebookF />
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='button-social'>
                                <div className='outer-btn'>
                                    <div className="btn transparent-social">
                                        <button id="sign-in-btn" onClick={signIn}>
                                            <p className="social-icon">
                                                <FaGithub />
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='button-social'>
                                <div className='outer-btn'>
                                    <div className="btn transparent-social">
                                        <button id="sign-in-btn" onClick={signIn}>
                                            <p className="social-icon">
                                                <FaGoogle />
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='button-social'>
                                <div className='outer-btn'>
                                    <div className="btn transparent-social">
                                        <button id="sign-in-btn" onClick={signIn}>
                                            <p className="social-icon">
                                                <FaLinkedin />
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <div className='button'>
                            <div className='outer'>
                                <div className="btn transparent">
                                    <button id="sign-up-btn" onClick={signUp}>
                                        Sign up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="" className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <div className='button'>
                            <div className='outer'>
                                <div className="btn transparent">
                                    <button id="sign-in-btn" onClick={signIn}>
                                        Sign in
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="" className="image" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Login;