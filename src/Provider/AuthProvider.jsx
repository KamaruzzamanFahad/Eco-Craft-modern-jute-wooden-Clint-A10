import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useState } from 'react'
import app from '../Pages/Config';



export const AuthContext = createContext(null)
const auth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [looding,setlooding] = useState(true)

    const CreateUserByEmail = (email,password) => {
        setlooding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const LoginByEmail = (email,password) => {
        setlooding(true)
       return signInWithEmailAndPassword(auth,email,password)
    }
    const LiginByGoogle = () =>{
        setlooding(true)
       return signInWithPopup(auth,GoogleProvider)
    }
    const LiginByGithub = () =>{
        setlooding(true)
       return signInWithPopup(auth,GithubProvider)
    }
    const LogOut = () =>{
        setlooding(true)
        signOut(auth)
    }












    onAuthStateChanged(auth, (user) =>{
        if(user){
            console.log(user)
            setuser(user)
        }
        else{
            console.log('user log out')
        }
    })

    const info = {
        user,
        CreateUserByEmail,
        looding,
        LoginByEmail,
        LiginByGoogle,
        LiginByGithub,
        LogOut,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;