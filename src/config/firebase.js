import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {getFirestore, setDoc} from 'firebase/firestore';
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCMbVVoKnSJ-AWbLh3ufP2W7H0GNEC2dLo",
  authDomain: "chitchat-app-3ea63.firebaseapp.com",
  projectId: "chitchat-app-3ea63",
  storageBucket: "chitchat-app-3ea63.appspot.com",
  messagingSenderId: "94045282276",
  appId: "1:94045282276:web:0b84b5c63f5455245771f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) =>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email,password);
        const user = res.user;

        await setDoc(doc(db, "users", user.uid),{
            id: user.uid,
            username: username.toLowerCase(),
            email,
            name: "",
            avatar: "",
            bio: "Hey there! I'm using chichat",
            lastSeen: Date.now()
        });

        await setDoc(doc(db, "chats", user.uid),{
            chatData:[],
        })
    } catch (error) {
        console.error(error)
        toast.error(error.code)
    }
}


export {signup}