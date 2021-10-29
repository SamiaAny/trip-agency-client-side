import React, { useState, useEffect, useMemo } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import './BookingPackage.css'

const BookingPackage = () => {
    const { bookingId } = useParams();
    const [packageDetails, setPackageDetails] = useState({});
    const [bookingInfo,setBookingInfo] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [packageName, setPackageName] = useState("");
    const { control: editControl, register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            packagename: "",
        }
    });

    useEffect(() => {
        fetch(`http://localhost:5000/packages/${bookingId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPackageDetails(data);
            })
    }, []);

    useEffect(() => {
        let defaults = {
            packagename: packageDetails?.name,
        }
        reset(defaults);
    }, [packageDetails, reset])

    // const handlePackageNameChange = e => {
    //     console.log(e.target.value);
    // }
    // const handleNameChange = e => {
    //     console.log(e.target.value);
    // }
    // const handleEmailChange = e => {
    //     console.log(e.target.value);
    // }
    // const handlePhoneChange = e => {
    //     console.log(e.target.value);
    // }
    // const handleDateChange = e => {
    //     console.log(e.target.value);
    // }

    // const handleOnSubmit = e => {
    //     e.preventDefalt();
    //     console.log('clicked');
    // }

    const onSubmit = data => {
        data.status= "pending";
        console.log(data);
        setBookingInfo(data);
        fetch('http://localhost:5000/allBookings',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {
                console.log(result);
                if(result.insertedId) {
                    alert("Your order is being proceed to confirm successfully");
                    reset();
                }
            })
    };

    

    return (
        <div>
            <h1 className="text-center">booking {bookingId}</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <img src={packageDetails?.img} alt="" />
                            <h2 className="mt-4">{packageDetails?.name}</h2>
                            <h6>{packageDetails?.location},{packageDetails?.country}</h6>
                            <p>{packageDetails?.description}</p>
                            <h5>Duration: {packageDetails?.duration}</h5>
                            <h5></h5>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="border p-3">
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
                                    <input type="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-6">
                        <div className="border p-3">
                            <h2>Book this package</h2>
                            <form onSubmit={handleOnSubmit}>
                               <input type="text" onBlur={handleNameChange} />
                               <input type="email" onBlur={handleEmailChange} />
                               <input type="number" name="" id="" placeholder="your phone" onBlur={handlePhoneChange} />
                               <input type="date" name="" id="" onBlur={handleDateChange}/>
                               <br />
                               <input type="text" value={packageDetails?.name|| ''} onBlur={handlePackageNameChange} required/><br/>
                               <input type="submit" value="submit" />
                            </form>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BookingPackage;