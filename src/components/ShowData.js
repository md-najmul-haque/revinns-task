import React, { useState } from 'react';
import ShowRow from './ShowRow';

const ShowData = ({ total, setTotal }) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    //Remove row data
    const removeData = (data) => {
        const updateRow = total.filter(i => i._id !== data._id)
        setTotal(updateRow)
    }

    return (
        <div className='mt-5'>
            <div className='mt-20 mx-10'>
                <div className="w-full sm:px-6">
                    <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                        <table className="w-full whitespace-nowrap">
                            <thead>
                                <tr className="h-16 w-full font-semibold text-center text-sm leading-none text-gray-800">
                                    <th>Description</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                    <th>delete</th>
                                </tr>
                            </thead>

                            <tbody className="w-full">
                                {
                                    total.map(data => <ShowRow removeData={removeData} setTotalPrice={setTotalPrice} setTotalQuantity={setTotalQuantity} data={data} />)
                                }
                                <tr>
                                    <td colSpan={2} ></td>
                                    <td><h4>Quantity : {totalQuantity} </h4></td>
                                    <td colSpan={2}><h4>Total : {totalPrice}  </h4></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowData;