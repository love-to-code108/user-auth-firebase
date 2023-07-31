import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged , signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase-config"
import './App.css';


function App() {

  const [registerEmail, setregisterEmail] = useState("");
  const [registerPassword, setregisterPassword] = useState("");
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [user,setuser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setuser(currentUser);
  })

  const register = async () => {

    try{
      const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
      console.log(user);

    } catch(error){
      console.log(error.message)
    }
  }

  const login = async () => {
    try{
      const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword );
      console.log(user);

    } catch(error){
      console.log(error.message)
    }
  }

  const logout = async () => {
    await signOut(auth);

  }


  return (
    <div className="App">
      <div>
        <h1>Register User</h1>

        {/* REGISTERING AN USER HERE */}




        {/* EMAIL FOR REGISTERING USER*/}
        <input type="text" placeholder='email..' onChange={(event) => {
          setregisterEmail(event.target.value);
        }}/>


        {/* PASSWORD FOR REGISTERING USER */}
        <input type="text" placeholder='password..' onChange={(event) => {
          setregisterPassword(event.target.value);
        }}/>



        <button onClick={register}>Register</button>
      </div>
      <div>
        <h1>Login User</h1>


        {/* LOGGING IN AN USER HERE */}




        {/* EMAIL */}
        <input type="text" placeholder='email..' onChange={(event) => {
          setloginEmail(event.target.value);
        }}/>

        {/* PASSWORD */}
        <input type="text" placeholder='password..' onChange={(event) => {
          setloginPassword(event.target.value);
        }}/>



        
        <button onClick={login}>Login</button>
      </div>
      <br />
      <br />
      <h1>User Logged In {user?.email}</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}

export default App;
