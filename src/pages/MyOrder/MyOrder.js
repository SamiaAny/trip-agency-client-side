import React, { useEffect, useState } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const [myBookings, setMyBookings] = useState([]);
    const { user } = useAuth();
    const [control, setControl] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://agile-basin-07002.herokuapp.com/allBookings/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMyBookings(data);
                setIsLoading(false);
            })
    }, [control]);

    //for update status
    const handleUpdate = id => {
        const url = `https://agile-basin-07002.herokuapp.com/allBookings/${id}`;
        fetch(url, { method: 'PUT'})
        .then(res=> res.json())
        .then(data => {
            // console.log('comming')
            // console.log(data);
            if(data.modifiedCount > 0) {
                setControl(!control);
            }
            else {
                setControl(false);
            }

        });
    }

    //for delete booking
    const handleDeleteBooking = (id) => {
        // console.log(id)
        const proceed = window.confirm('Are you sure?');
        // console.log(proceed);
        if (proceed) {
            fetch(`https://agile-basin-07002.herokuapp.com/allBookings/${id}`,
                {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = myBookings.filter(item => item._id !== id);
                        setMyBookings(remaining);
                    }

                })
        }
    }
    return (

        <div className="booking-part mt-5">
            {
                isLoading && <Spinner className="spinner-circle" animation="grow" variant="dark" ></Spinner>
            }
            <h2 className="text-center mb-5">My Bookings</h2>
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
                    myBookings?.map((bookInfo, index) => (
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
                                    
                                    <input type="submit" className="btn btn-primary btn-sm m-1" value={bookInfo?.status || ''} onClick={() => handleUpdate(bookInfo?._id)} />
                                    <Button onClick={() => handleDeleteBooking(bookInfo?._id)} variant="danger" size="sm" className="m-1">
                                        delete
                                    </Button>
                                    
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

export default MyOrder;