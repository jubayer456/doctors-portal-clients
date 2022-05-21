import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/home');
                }
                return res.json();
            })
            .then(data => setAppointments(data))
    }, [user, navigate])
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>serial</th>
                        <th>Name</th>
                        <th>date</th>
                        <th>slot</th>
                        <th>treatment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((appointment, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.slot}</td>
                                <td>{appointment.treatment}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;