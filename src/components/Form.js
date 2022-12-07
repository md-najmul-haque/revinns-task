import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ShowData from './ShowData';


const Form = () => {
    const [data, setData] = useState([])
    const [total, setTotal] = useState([])

    // fetch data 
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    //Handle Single product by id
    const handleId = e => {
        const totalData = [
            ...total, e
        ]
        setTotal(totalData)
    }


    return (<div className=' mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                data?.map(product => <ProductCard key={product._id} handleId={handleId} product={product} ></ProductCard>)
            }
        </div>
        <ShowData setTotal={setTotal} total={total} />
    </div>
    );
};

export default Form;