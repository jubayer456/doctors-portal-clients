import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigation } from 'react-day-picker';
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // const navigate = useNavigation();
    if (user) {
        console.log(user);
    }

    return (
        <div className='flex justify-center items-center h-96'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-2xl font-bold text-center">Login</h2>
                    <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-outline">Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;