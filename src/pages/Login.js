import "../styles/RegisterLogin.css"
const Login = () => {
    return (
        <div className="container">
            <div className="wrapper" style={{width: '25%'}}>
                <h1 className="title" style={{display: 'flex', justifyContent: 'center'}}>SIGN IN</h1>
                <form className="Form" style={{ flexDirection: "column" }}>
                    <input className="Input" placeholder="username"/>
                    <input className="Input" placeholder="password"/>
                    <button className="btn" style={{margin: '30px auto'}}>LOGIN</button>
                    <p style={{display: 'flex', justifyContent: 'center'}}>Forgot the password?</p>
                    <a className="Link">CREATE A NEW ACCOUNT</a>
                </form>
            </div>
        </div>
    )
}
export default Login