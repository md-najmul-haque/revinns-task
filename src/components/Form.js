import React from 'react';

const Form = () => {

    return (
        <div className='mt-20 mx-10'>
            <div className="w-full sm:px-6">
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full font-semibold text-center text-sm leading-none text-gray-800">
                                <th>Product ID</th>
                                <th>Description</th>
                                <th>Unit Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Action</th>
                            </tr>
                        </thead>


                        <tbody className="w-full">
                            <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                                <td className="cursor-pointer">
                                    <input type="text" placeholder="Product ID" className="input input-bordered w-full max-w-xs" />
                                </td>
                                <td className="">
                                    <input type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" />
                                </td>
                                <td className="">
                                    <input type="text" placeholder="Unit Price" className="input input-bordered w-full max-w-xs" />
                                </td>

                                <td className="">
                                    <input type="text" placeholder="Quantity" className="input input-bordered w-full max-w-xs" />
                                </td>

                                <td className="">
                                    <input type="text" placeholder="Subtotal" className="input input-bordered w-full max-w-xs" />
                                </td>

                                <td className="">
                                    <div className="font-medium">
                                        <button onClick={() => { }} className="btn btn-sm btn-secondary ml-2">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Form;