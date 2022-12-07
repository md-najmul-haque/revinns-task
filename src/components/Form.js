import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const product = {
            productId: data.productId,
            description: data.description,
            price: data.price,
            quantity: data.quantity,
            subtotal: data.subtotal
        }
        fetch('http://localhost:5000/api/v1/product', {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    return (
        <div className='mt-20 mx-10'>
            <div className="w-full sm:px-6">
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                        <div className="form-control w-full max-w-xs mx-auto">
                                            <input type="text" placeholder="Enter Product ID"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("productId", {
                                                    required: {
                                                        value: true,
                                                        message: "Product ID is required"
                                                    }
                                                })} />
                                            <label className="label">
                                                {errors.productId?.type === 'required' && <span className="label-text-alt text-red-600">{errors.productId.message}</span>}
                                            </label>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="form-control w-full max-w-xs mx-auto">
                                            <input type="text" placeholder="Enter Description"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("description", {
                                                    required: {
                                                        value: true,
                                                        message: "Description is required"
                                                    }
                                                })} />
                                            <label className="label">
                                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-600">{errors.description.message}</span>}
                                            </label>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="form-control w-full max-w-xs mx-auto">
                                            <input type="number" placeholder="Enter Price"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("price", {
                                                    required: {
                                                        value: true,
                                                        message: "Price is required"
                                                    }
                                                })} />
                                            <label className="label">
                                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-600">{errors.price.message}</span>}
                                            </label>
                                        </div>
                                    </td>

                                    <td className="">
                                        <div className="form-control w-full max-w-xs mx-auto">
                                            <input type="number" placeholder="Enter quantity"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("quantity", {
                                                    required: {
                                                        value: true,
                                                        message: "Quantity is required"
                                                    }
                                                })} />
                                            <label className="label">
                                                {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-600">{errors.quantity.message}</span>}
                                            </label>
                                        </div>
                                    </td>

                                    <td className="">
                                        <div className="form-control w-full max-w-xs mx-auto">
                                            <input type="text" placeholder="Subtotal"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("subtotal", {
                                                    required: {
                                                        value: true,
                                                        message: "Subtotal is required"
                                                    }
                                                })} />
                                            <label className="label">
                                                {errors.subtotal?.type === 'required' && <span className="label-text-alt text-red-600">{errors.subtotal.message}</span>}
                                            </label>
                                        </div>
                                    </td>

                                    <td className="">
                                        <input className='btn btn-primary' type="submit" />
                                        <button onClick={() => { }} className="btn btn-sm btn-accent ml-2">Delete</button>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Form;