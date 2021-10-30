import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import SinglePackage from '../SinglePackage/SinglePackage';

const AllTourPackages = () => {
    const [packages,setPackages] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        fetch('https://agile-basin-07002.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                setPackages(data)
                setLoading(false);
            })
    },[])
    return (
        <div className="mb-5">
            {
                loading && <Spinner className="spinner-circle" animation="grow" variant="dark" ></Spinner>
            }
            <h1 className="text-center my-5">Packages We Offer</h1>
            <div className="container">
                <Row xs={1} md={3} className="g-4">
                    {
                        packages.map(pkg => <SinglePackage key={pkg._id} package={pkg}></SinglePackage>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default AllTourPackages;