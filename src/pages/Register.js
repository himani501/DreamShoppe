import "../styles/RegisterLogin.css";  //import scss file in your component
const Register = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <h1 className="title">CREATE AN ACCOUNT</h1>
                <form className="Form">
                    <input className="Input" placeholder="First name"/>
                    <input className="Input" placeholder="Last name"/>
                    <input className="Input" placeholder="username"/>
                    <input className="Input" placeholder="email"/>
                    <input className="Input" placeholder="password"/>
                    <input className="Input" placeholder="confirm password"/>
                    <span className="agreement">
                        <input type="checkbox"/>
                        By creating an account, I consent to the processing of the personal data in accordance with the <b>PRIVACY POLICY</b>
                    </span>
                    <button className="btn">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}
export default Register