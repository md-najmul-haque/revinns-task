import React, { useEffect, useState } from 'react';

const ShowRow = ({ data, setTotalPrice, setTotalQuantity, removeData, }) => {
    const [subTotal, setSubTotal] = useState(0)
    const [quantity, setQuantity] = useState(0)

    //calculate subtotal quantity
    const handleSubTotal = (e) => {
        const value = e.target.value;
        setSubTotal(value * data.price)
        setQuantity(value)
    }

    // Total line and total bill
    useEffect(() => {
        setTotalQuantity((i) => i + Number(quantity))
        setTotalPrice((i) => i + Number(subTotal))
    }, [quantity])


    return (
        <tr>
            <td><input className="input input-bordered w-full max-w-xs" type="text" value={data.description} /></td>
            <td><input className="input input-bordered w-full max-w-xs" type="text" value={data.price} /></td>
            <td ><input className="input input-bordered w-full max-w-xs" placeholder='Enter Quantity' type="number" onChange={handleSubTotal} /></td>
            <td><input className="input input-bordered w-full max-w-xs" type="text" value={subTotal} /></td>
            <td><button className='btn btn-error' onClick={() => removeData(data)}>X</button></td>
        </tr>
    );
};

export default ShowRow;