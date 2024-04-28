import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../Provider/AuthProvider';

const AddCraft = () => {
    const {user} = useContext(AuthContext)

    const handlesubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const processing_time = form.processing_time.value;
        const detils = form.detils.value;
        const photo = form.photo.value;
        const customizable = form.customizable.value;
        const stockStatus = form.stockStatus.value;
        const username = user.displayName;
        const email = user.email;
        const item = { name, subcategory_Name, price, rating, processing_time, detils, photo, customizable,stockStatus,username,email}
        console.log(item)

        fetch('http://localhost:5000/craft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify(item),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    form.reset();
                    Swal.fire({
                        title: 'Success !',
                        text: 'Item Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })

    }

    return (
        <div className='px-[10%]'>
            <div className='bg-[#F4F3F0] p-12 px-5 md:px-20'>
                <h1 className='text-center text-[#374151] sadobl'>Add New Craft Item </h1>

                <form onSubmit={handlesubmit} action="" className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                    <div>
                        <h2 className='mb-2 font-semibold'>Item_Name</h2>
                        <input required className='w-full p-2 outline-none' type="text" placeholder='Enter item name' name='name' />
                    </div>
                    <div>
                        <h2 className='mb-2 font-semibold'>Subcategory Name</h2>
                        <select required name='subcategory_Name' className="select w-full p-2 outline-none">
                            <option disabled selected>Select subcategory</option>
                            <option>Wooden Furniture & Sculptures</option>
                            <option>Wooden Home Decor</option>
                            <option>Wooden Utensils and Kitchenware</option>
                            <option>Jute Home Decor</option>
                            <option>Jute Kitchenware & utensils</option>
                            <option>Jute and wooden jewellery</option>
                        </select>
                    </div>
                    <div>
                        <h2 className='mb-2 font-semibold'>price</h2>
                        <input required className='w-full p-2 outline-none' type="text" placeholder='Enter Item price' name='price' />
                    </div>
                    <div>
                        <h2 className='mb-2 font-semibold'>Rating</h2>
                        <input required className='w-full p-2 outline-none' type="text" placeholder='Enter Item rating 1-5' name='rating' />
                    </div>
                    <div>
                        <h2 className='mb-2 font-semibold'>Processing time</h2>
                        <input required className='w-full p-2 outline-none' type="text" placeholder='Enter Item Processing_time' name='processing_time' />
                    </div>
                    <div>
                        <h2 className='mb-2 font-semibold'>Is Customizable</h2>
                        <select required name='customizable' className="select w-full p-2 outline-none">
                            <option disabled selected>Yes or No?</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div>
                        <h2 className='mb-2 font-semibold'>StockStatus</h2>
                        <select required name='stockStatus' className="select w-full p-2 outline-none" >
                            <option disabled selected>In stock or Made to Order?</option>
                            <option>In stock</option>
                            <option>Made to Order</option>
                        </select>
                    </div>
                    <div className='md:col-span-2'>
                        <h2 className='mb-2 font-semibold'>Short Description</h2>
                        <textarea required className='w-full p-2 outline-none' name="detils" cols="30" rows="5" placeholder='Enter short description'></textarea>

                    </div>
                    <div className='md:col-span-2'>
                        <h2 className='mb-2 font-semibold'>Item Photo</h2>
                        <input required className='w-full p-2 outline-none' type="text" placeholder='Enter photo URL' name='photo' />
                    </div>
                    <div>
                        <h2 className='mb-2 font-semibold'>User Name</h2>
                        <input readOnly className='w-full p-2 outline-none' type="text" value={user.displayName} />
                    </div>
                    <div>
                        <h2 className='mb-2 font-semibold'>User Email</h2>
                        <input readOnly className='w-full p-2 outline-none' type="text" value={user.email} />
                    </div>
                    <button className='md:col-span-2 bg-[#d1d1d1] text-[#331A15] border-2 border-[#331A15] rounded-sm font-bold'>Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddCraft;