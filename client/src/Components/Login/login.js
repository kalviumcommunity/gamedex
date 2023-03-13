import './login.css';
import { FaFacebookF } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaGoogle } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"


function login() {

    const signUp = () => {
        document.querySelector(".container_login").classList.add("sign-up-mode");
        console.log('signUp')
    };

    const signIn = () => {
        document.querySelector(".container_login").classList.remove("sign-up-mode");
    };

    return (
        <div className="container_login">
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Login" className="btn solid" />
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="social-icon">
                                <FaGithub />
                            </a>
                            <a href="#" className="social-icon">
                                <FaGoogle />
                            </a>
                            <a href="#" className="social-icon">
                                <FaLinkedin />
                            </a>
                        </div>
                    </form>
                    <form action="#" className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" className="btn" value="Sign up" />
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                        <a href="#" className="social-icon">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="social-icon">
                                <FaGithub />
                            </a>
                            <a href="#" className="social-icon">
                                <FaGoogle />
                            </a>
                            <a href="#" className="social-icon">
                                <FaLinkedin />
                            </a>
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
                        <button className="btn transparent" id="sign-up-btn" onClick={signUp}>
                            Sign up
                        </button>
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
                        <button className="btn transparent" id="sign-in-btn" onClick={signIn}>
                            Sign in
                        </button>
                    </div>
                    <img src="" className="image" alt="" />
                </div>
            </div>
        </div>
    );
}

export default login;