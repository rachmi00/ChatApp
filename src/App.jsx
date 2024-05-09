import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import NavBar from './Components/NavBar';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatBox from "./Components/Chatbox";
import Welcome from "./Components/Welcome";
import "./App.css";


function App() {
 
  const [user] = useAuthState(auth);
  return (
    <>
       <div className="App">
      <NavBar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
    </>
  )
}

export default App
