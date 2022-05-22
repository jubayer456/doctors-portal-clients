import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    const { _id, name } = deletingDoctor;
    const deleteDoctor = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/doctor/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Barear ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Doctor :${name} is deleted`);
                    refetch();
                }
                else {
                    toast.error(`Doctor :${name} did not deleted`);
                }
                setDeletingDoctor(null);

            })

    }

    return (
        <div>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure You want to delete ${name}</h3>
                    <p class="py-4">If you click delete then You can not retrieve deleted item</p>
                    <div class="modal-action">
                        <button onClick={() => deleteDoctor(_id
                        )} className='btn btn-sm btn-error'>Delete</button>
                        <label for="delete-modal" class="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;