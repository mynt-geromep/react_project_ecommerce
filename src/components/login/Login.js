const Login = (props) => {

    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError } = props

    return (
        <div className="login">
            <div className="login-image-container">
                {/* <h2>image container</h2> */}
                {/* <img src=""/> */}
            </div>
            <div className="login-container">
                <h1>ShopNow</h1>
                <p className="login-subtitle">Save money. Live better.</p>
                <label>Email</label>
                <input type="text" autoFocus required 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                />
                <p className="login-error-msg">{emailError}</p>
                <label>Password</label>
                <input type="password" required 
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                />
                <p className="login-error-msg">{passwordError}</p>
                <div className="button-container">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign in</button>
                            <p>Don't have an account ? 
                            <span onClick={() => setHasAccount(!hasAccount)}>
                            Sign up
                            </span></p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup}>Sign up</button>
                            <p>Have an account ? 
                            <span onClick={() => setHasAccount(!hasAccount)}>
                            Sign in
                            </span></p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
 
export default Login;