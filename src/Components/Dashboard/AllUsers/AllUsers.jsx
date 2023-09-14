import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const AllUsers = () => {
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-market-server-salmatonka.vercel.app/users`);
            const data = await res.json();
            return data;
        }
    })
    // refetch();
    // if (isLoading) {
    //     return <progress className="progress w-56"></progress>
    // }

    const handleVerfiyUser = (id) => {
        const permission = window.confirm('Are you sure to verify this user?');
        if (permission) {
            fetch(`https://mobile-market-server-salmatonka.vercel.app/users?id=${id}`, {
                method: "PUT"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        toast.success('User verified')
                         refetch();
                    }
                })
        }
    }

    //Delete an user from database
    const handleDeleteUser = id => {
        const permission = window.confirm('On delete user this can not be undone');
        if (permission) {
            fetch(`https://mobile-market-server-salmatonka.vercel.app/users?id=${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    toast.success("User delete successfully")
                    refetch();
                })
        }
    }

    return (
        <div className='bg-gradient-to-tr to-purple-100 from-cyan-100 py-10 px-14'>
             <h3 className='text-3xl text-bold pb-6 text-center'>All Users</h3>
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>User name</th>
                        <th>User email</th>
                        <th>Role</th>
                        <th>Verify</th>
                        <th>Delete user</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => <tr key={user?._id} className="hover">
                            <th>{i + 1}</th>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>{user?.role}</td>
                            <td>
                                {
                                    user?.verified ?
                                        <button disabled className='btn btn-primary btn-sm'>verified</button>
                                        :
                                        <button onClick={() => handleVerfiyUser(user?._id)} className='btn btn-primary btn-sm'>Verify</button>
                                }
                            </td>

                            <td>
                                <button onClick={() => handleDeleteUser(user?._id)} className='btn btn-error btn-sm text-white'>Delete</button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllUsers;