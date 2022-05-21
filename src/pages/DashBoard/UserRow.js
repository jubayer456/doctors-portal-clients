import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Barear ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                refetch();
                toast.success("successfully made and admin");
            })

    }

    return (
        <tr>
            <td>{index}</td>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn'>Make Admin</button>}</td>
            <td><button className='btn'>Remove</button></td>
        </tr>
    );
};

export default UserRow;