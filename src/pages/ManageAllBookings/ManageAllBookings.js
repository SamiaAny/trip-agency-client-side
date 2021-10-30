import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import './ManageAllBookings.css';

const ManageAllBookings = () => {
    const [manageBookings, setManageBookings] = useState([]);
    const [control,setControl] = useState(false);

    useEffect(() => {
        fetch('https://agile-basin-07002.herokuapp.com/allBookings')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setManageBookings(data);
            })
    }, [control]);

    const handleUpdate = id => {
        const url = `https://agile-basin-07002.herokuapp.com/allBookings/${id}`;
        fetch(url, { method: 'PUT'})
        .then(res=> res.json())
        .then(data => {
            console.log('comming')
            console.log(data);
            if(data.modifiedCount > 0) {
                setControl(!control);
            }
            else {
                setControl(false);
            }

        });
    }
    // const handleUpdate = (id) => {
    //     console.log(id);
    //     const updateData = manageBookings.find(item => item._id === id);
    //     console.log(updateData);
    //     setUser(updateData);
    //     console.log(user);
    //     fetch(`https://agile-basin-07002.herokuapp.com/allBookings/${id}`,{
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     }).then()
    //     //   .then(data => console.log(user))
    // }

    const handleDeleteBooking = (id) => {
        console.log(id)
        const proceed = window.confirm('Are you sure to delete?');
        console.log(proceed);
        if(proceed) {
            fetch(`https://agile-basin-07002.herokuapp.com/allBookings/${id}`,
            {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remaining = manageBookings.filter(item => item._id !== id);
                    setManageBookings(remaining);
                }

            })
        }
    }
    return (
        <div className="booking-part mt-5">
            <h2 className="text-center mb-5">Manage All Bookings</h2>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Package</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    manageBookings?.map((bookInfo, index) => (
                        <tbody key={bookInfo._id}>
                            <tr>
                                <td>{index = index + 1}</td>
                                <td>{bookInfo?.name}</td>
                                <td>{bookInfo?.email}</td>
                                <td>{bookInfo?.packagename}</td>
                                <td>{bookInfo?.phone}</td>
                                <td>{bookInfo?.address}</td>
                                <td>{bookInfo?.time}</td>
                                <td>
                                    {/* <Button onClick={() => handleUpdate(bookInfo?._id)} variant="primary" size="sm">
                                        {bookInfo?.status}
                                    </Button>{' '} */}
                                    <input type="submit" className="btn btn-primary btn-sm m-1" value={bookInfo?.status || ''} onClick={() => handleUpdate(bookInfo?._id)} />
                                    <Button onClick={() => handleDeleteBooking(bookInfo?._id)} variant="danger" size="sm" className="m-1">
                                        delete
                                    </Button>
                                    {/* <button onClick={() => handleDeleteBooking(bookInfo?._id)}>X</button> */}
                                </td>
                            </tr>
                        </tbody>
                    ))
                }
            </Table>
            {/* <table>
                <thead>
                    <tr>
                        <th>index</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Package</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table> */}
        </div>
    );
};

export default ManageAllBookings;