import React from 'react';

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const taste= form.taste.value;
        const details= form.details.value;
        const photo= form.photo.value;
        const newCoffee = {name,supplier,category,quantity,taste,details,photo}
        console.log(newCoffee);

    }
    return (
        <div className='bg-stone-400  p-40'>
            <div className='text-center mt-10 font-bold '>
            <h2 className='text-6xl mb-4 text-zinc-700 text-shadow-lg'>Add New Coffee</h2>
            <p className='w-1/2 mx-auto mt-10 mb-10'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className=' w-1/2 mx-auto '>
                   <div className='flex justify-between'>
                           <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl"> Name</span>
                                    </label>
                                    <label className="input-group">
                                        
                                        <input type="text" placeholder="Enter Coffee Name" name='name' className="input input-bordered w-96" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Supplier</span>
                                    </label>
                                    <label className="input-group">
                                        
                                        <input type="text" placeholder="Enter Coffee Supplier Name" name='supplier' className="input input-bordered w-96" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl"> Category</span>
                                    </label>
                                    <label className="input-group">
                                        
                                        <input type="text" placeholder="Enter Coffee Category" name='category' className="input input-bordered w-96" />
                                    </label>
                                </div>
                                
                                
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl"> Available Quantity</span>
                                    </label>
                                    <label className="input-group">
                                        
                                        <input type="number" placeholder="Enter Coffee Quantity" name='quantity' className="input input-bordered w-96" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl"> Taste</span>
                                    </label>
                                    <label className="input-group">
                                        
                                        <input type="text" placeholder="Enter Coffee Taste" name='taste' className="input input-bordered w-96" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl"> Details</span>
                                    </label>
                                    <label className="input-group">
                                        
                                        <input type="text" placeholder="Enter Coffee Details" name='details' className="input input-bordered w-96" />
                                    </label>
                                </div>
                            </div>
                   </div>
                            <div className="form-control pb-5">
                                    <label className="label">
                                        <span className="label-text text-xl">Photo</span>
                                    </label>
                                    <label className="input-group">
                                        
                                        <input type="text" placeholder="Enter Coffee Photo" name='photo' className="input input-bordered block w-full" />
                                    </label>
                            </div>
                            <input className='btn btn-block p-' type="submit" value="Add Coffee" />
                </div>
                
            </form>
        </div>
    );
};

export default AddCoffee;