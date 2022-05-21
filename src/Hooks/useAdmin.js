import { useEffect, useState } from 'react';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: 'GET',
                headers: {
                    authorization: `barear ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/home');
                    }
                    return res.json()
                })
                .then(data => setAdmin(data.admin));

        }
    }, [user, navigate])
    return [admin];
};

export default useAdmin;