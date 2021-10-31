import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './BookingPackage.css'

const BookingPackage = () => {
    const { bookingId } = useParams();
    const [packageDetails, setPackageDetails] = useState({});
    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            packagename: "",
        }
    });

    useEffect(() => {
        fetch(`https://agile-basin-07002.herokuapp.com/packages/${bookingId}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setPackageDetails(data);
            })
    }, []);

    //for default values setting
    useEffect(() => {
        let defaults = {
            packagename: packageDetails?.name,
            name: user?.displayName,
            email: user?.email
        }
        reset(defaults);
    }, [packageDetails, user, reset]);


    const onSubmit = data => {
        data.status= "pending";
        // console.log(data);
        fetch('https://agile-basin-07002.herokuapp.com/allBookings',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {
                // console.log(result);
                if(result.insertedId) {
                    alert("Your order is being proceed to confirm successfully");
                    reset();
                }
            })
    };

    

    return (
        <div className="my-5">
            <h1 className="text-center mb-5">Book For Your Dream Vacation</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <div className="book-img">
                                <img src={packageDetails?.img} alt="" />
                            </div>
                            <h2 className="mt-4">{packageDetails?.name}</h2>
                            <h6>{packageDetails?.location},{packageDetails?.country}</h6>
                            <p>{packageDetails?.description}</p>
                            <h5>Duration: {packageDetails?.duration}</h5>
                            <h5>Price: Tk.{packageDetails?.price}</h5>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="border shadow p-3">
                            <h2 className="text-center mb-4">Book this package</h2>
                            <div className="mx-auto center-form">
                                <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                                    <input  {...register("packagename")} />
                                    <br />
                                    <input {...register("name", { required: true })} />
                                    <br />
                                    <input type="email" {...register("email", { required: true })} />
                                    <br />
                                    <input placeholder="Address" {...register("address", { required: true })} />
                                    <br />
                                    <input placeholder="Your phone" type="number" {...register("phone", { required: true })} /><br />
                                    <input type="date"  {...register("time", { required: true })} />
                                    <br />
                                    <input type="submit" className="btn btn-dark"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPackage;