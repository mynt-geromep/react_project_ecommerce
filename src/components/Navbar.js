import { useContext, useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { CartContext } from './products/CartContext';
import Firebase from './login/Firebase';
import Login from "./login/Login";

const Navbar = () => {

    const {value} = useContext(CartContext);

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const history = useHistory();
  
    const clearInputs = () => {
        setEmail("")
        setPassword("")
    }
  
    const clearErrors = () => {
        setEmailError("")
        setPasswordError("")
    }
  
    const handleLogin = () => {
        clearErrors();
        Firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message)
                    break;
                default:
                    break;
                }
            })
        
    }
  
    const handleSignup = () => {
        clearErrors();
        Firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message)
                        break;
                    default:
                        break
                }
            })
    }
  
    const handleLogout = () => {
        Firebase.auth().signOut();
        history.push("/");
    }
  
    const authListener = () => {
        Firebase.auth().onAuthStateChanged(user => {
        if (user) {
            clearInputs()
            setUser(user)
            history.push("/store")
        } else {
            setUser("")
        }
        })
    }
  
    useEffect( () => {
      authListener();
    }, [])

    return ( 
        <div>
            {user ? (
                <nav className="navbar">
                    <h1>ShopNow</h1>
                    <div className="links">
                        <Link to="/store">Store</Link>
                        <Link to="/cart">🛒 Cart ({value})</Link>
                        <Link to="/reviews">Reviews</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </nav>
                ) : (
                    <Login 
                    email={email} 
                    setEmail={setEmail} 
                    password={password} 
                    setPassword={setPassword} 
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                    />
                )
            }
        </div> 
    );
}
 
export default Navbar;