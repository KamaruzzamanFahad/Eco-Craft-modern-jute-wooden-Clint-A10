import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from "react-helmet-async";

const AddCraft = () => {

    const [theme, settheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light")
    window.addEventListener('click', function (event) {
        if (event.target.classList[0] == "toggle") {
            const theme = localStorage.getItem('theme')
            settheme(theme)
        }
    });
    const cardstyles = {
        color: (theme == "light") ? 'black' : 'rgb(240, 240, 240)',
        'background-color': (theme == "light") ? '#F4F3F0' : '#ffffff22',
    };

    const fildinput = {
        color: (theme == "light") ? 'black' : 'rgb(240, 240, 240)',
        'background-color': (theme == "light") ? 'white' : '#ffffff22',
    };

    const option = {
        color: (theme == "light") ? 'black' : 'white',
        'background-color': (theme == "light") ? 'white' : 'black',
    };




    const { user } = useContext(AuthContext)
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
        const item = { name, subcategory_Name, price, rating, processing_time, detils, photo, customizable, stockStatus, username, email }
        console.log(item)

        fetch('https://server-jute-wooden.vercel.app/craft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(item),
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
            <Helmet>
                <title>Add Craft & Art</title>
            </Helmet>
            <div style={cardstyles} className=' p-12 px-5 md:px-20'>
                <h1 className='text-center text-[#374151] sadobl'>Add New Craft Item </h1>

                <form onSubmit={handlesubmit} action="" className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                    <div>
                        <h2 className='mb-2 font-semibold'>Item_Name</h2>
                        <input style={fildinput} required className='w-full p-2 outline-none' type="text" placeholder='Enter item name' name='name' />
                    </div>
                    <div>
                        <h2 className='mb-2 font-semibold'>Subcategory Name</h2>
                        <select style={fildinput} required name='subcategory_Name' className="select w-full p-2 outline-none">
                            <option style={option} disabled selected>Select subcategory</option>
                            <option style={option}>Wooden Furniture & Sculptures</option>
                            <option style={option}>Wooden Home Decor</option>
                            <option style={option}>Wooden Utensils and Kitchenware</option>
                            <option style={option}>Jute Home Decor</option>
                            <option style={option}>Jute Kitchenware & utensils</option>
                            <option style={option}>Jute and wooden jewellery</option>
                        </select>
                    </div>
                    <div>
                        <h2 className='mb-2 font-semibold'>price</h2>
                        <input style={fildinput} required className='w-full p-2 outline-none' type="text" placeholder='Enter Item price' name='price' />
                    </div>
                    <div>
                        <h2 className='mb-2 font-semibold'>Rating</h2>
                        <input style={fildinput} required className='w-full p-2 outline-none' type="text" placeholder='Enter Item rating 1-5' name='rating' />
                    </div>
                    <div>
                        <h2 className='mb-2 font-semibold'>Processing time</h2>
                        <input style={fildinput} required className='w-full p-2 outline-none' type="text" placeholder='Enter Item Processing_time' name='processing_time' />
                    </div>
                    <div>
                        <h2 className='mb-2 font-semibold'>Is Customizable</h2>
                        <select style={fildinput} required name='customizable' className="select w-full p-2 outline-none">
                            <option style={option} disabled selected>Yes or No?</option>
                            <option style={option}>Yes</option>
                            <option style={option}>No</option>
                        </select>
                    </div>
                    <div>
                        <h2 className='mb-2 font-semibold'>StockStatus</h2>
                        <select style={fildinput} required name='stockStatus' className="select w-full p-2 outline-none" >
                            <option style={option} disabled selected>In stock or Made to Order?</option>
                            <option style={option}>In stock</option>
                            <option style={option}>Made to Order</option>
                        </select>
                    </div>
                    <div className='md:col-span-2'>
                        <h2 className='mb-2 font-semibold'>Short Description</h2>
                        <textarea style={fildinput} required className='w-full p-2 outline-none' name="detils" cols="30" rows="5" placeholder='Enter short description'></textarea>

                    </div>
                    <div className='md:col-span-2'>
                        <h2 className='mb-2 font-semibold'>Item Photo</h2>
                        <input style={fildinput} required className='w-full p-2 outline-none' type="text" placeholder='Enter photo URL' name='photo' />
                    </div>
                    <div>
                        <h2 className='mb-2 font-semibold'>User Name</h2>
                        <input style={fildinput} readOnly className='w-full p-2 outline-none' type="text" value={user.displayName} />
                    </div>
                    <div>
                        <h2 className='mb-2 font-semibold'>User Email</h2>
                        <input style={fildinput} readOnly className='w-full p-2 outline-none' type="text" value={user.email} />
                    </div>
                    <button className='md:col-span-2 bg-[#d1d1d1] text-[#331A15] border-2 border-[#331A15] rounded-sm font-bold'>Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddCraft;