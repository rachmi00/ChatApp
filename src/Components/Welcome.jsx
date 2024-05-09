import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import call_image from '../assets/Phonies by DrawKit Vector Illustrations/PNG/Coffe call_DrawKit_Vector_Illustrations.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function Welcome() {

const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
};

    return (
        <main className="welcome">
      <h2>Welcome to Rachel's  Chat App.</h2>
      <img src={call_image} alt="ReactJs logo" width={300} height={300} />
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button className="google goob" onClick={googleSignIn} >
        Sign in with google <FontAwesomeIcon icon={faGoogle} className="googly"/>
      </button>
      
    </main>
    )
  }
  
  export default Welcome