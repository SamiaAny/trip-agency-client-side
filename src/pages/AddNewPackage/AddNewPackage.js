import React from 'react';
import { useForm } from "react-hook-form";


const AddNewPackage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        // console.log(data);
        fetch('https://agile-basin-07002.herokuapp.com/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                if (result.insertedId) {
                    alert('successfully added');
                    reset();
                }
            });


    };

    return (
        <div className="my-5">
            <h1 className="text-center mb-4">Add New Package</h1>
            <div className="d-flex justify-content-center align-items-center">
                <div className="w-50">
                    <form className="booking-form" onSubmit={handleSubmit(onSubmit)} style={{ padding: '2%' }}>
                        <input placeholder="Package name" {...register("name", { required: true })} /><br />
                        {errors.name && <span>This field is required</span>}

                        <input placeholder="Location" {...register("location", { required: true })} />
                        {errors.location && <span>This field is required</span>}<br />

                        <input placeholder="Duration" {...register("duration", { required: true })} /><br />
                        {errors.duration && <span>This field is required</span>}

                        <input placeholder="Groupsize" type="number" {...register("groupSize", { required: true })} /><br />
                        {errors.groupSize && <span>This field is required</span>}

                        <textarea placeholder="Description.." {...register("description", { required: true })} /><br />
                        {errors.description && <span>This field is required</span>}

                        <input placeholder="Country" {...register("country", { required: true })} />
                        {errors.country && <span>This field is required</span>}<br />

                        <input placeholder="Price" type="number" {...register("price", { required: true })} />
                        {errors.price && <span>This field is required</span>}<br />

                        <input placeholder="image url" {...register("img", { required: true })} />
                        {errors.img && <span>This field is required</span>}<br />

                        <input type="submit" className="btn btn-primary"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNewPackage;