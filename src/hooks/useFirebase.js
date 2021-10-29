import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuth from "../Firebase/firebase.init";

firebaseAuth();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);

    const auth = getAuth();

    //google signin method
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
            // .then(result => {
            //     console.log(result.user);
            //     setUser(result.user);
            // })
            // .catch((error) => {
            //     console.log(error.message);
            // })
    };

    //set observer
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });

        return ()=>unsubscribed;
    },[]);

    //logout
    const logOut = () => {
        signOut(auth).then(()=> {
            setUser({});
        })
        .finally(()=>setIsLoading(false))
    };

    return {
        user,
        setUser,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;