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
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                toast.error("Failed to  make and admin");
            }
            return res.json();
        })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success("successfully made and admin");
                }

            })

    }

    return (
        <tr>
            <td>{index}</td>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-sm'>Make Admin</button>}</td>
            <td><button className='btn btn-sm'>Remove</button></td>
        </tr>
    );
};

export default UserRow;