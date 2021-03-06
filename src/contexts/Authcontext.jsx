import React, { useState, useEffect, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export function Authcontext({ children }) {
    const [loading, setloading] = useState(true);
    const [user, setuser] = useState();
    const history = useHistory();

    useEffect(() => {    // i cant understand this code
        auth.onAuthStateChanged(user => {
            setuser(user);
            setloading(false);
            if(user) history.push("/chat");
        })
    }, [user, history]);

    const value = { user };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
