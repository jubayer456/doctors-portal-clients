import React from 'react';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, image, email, speciality } = doctor;
    return (
        <tr>
            <th>{index}</th>
            <td><div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                    <img src={image} alt="Avatar Tailwind CSS Component" />
                </div>
            </div>
            </td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{speciality}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-modal" className='btn btn-sm btn-error'>Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;