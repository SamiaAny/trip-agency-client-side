import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SinglePackage from '../SinglePackage/SinglePackage';

const AllTourPackages = () => {
    const [packages,setPackages] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    },[])
    return (
        <div>
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