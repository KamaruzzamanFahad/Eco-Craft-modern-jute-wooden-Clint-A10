import Rating from 'react-rating';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
const MyArt = () => {
    const [data, setdata] = useState([]);
    
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://server-jute-wooden.vercel.app/product/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setdata(data)
            })
    }, [])


    const deletehandle = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-jute-wooden.vercel.app/delete/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(datarespons => {
                        if (datarespons.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Item has been deleted.",
                                icon: "success"
                            });

                            

                        }
                        const rest = data.filter(item => item._id != id)
                        console.log(rest)
                            setdata(rest)
                    })

            }
        });
    }

    const customizehandle = (e) =>{
        const ans = e.target.value;
        if(ans == "Customizable: Yes"){
            fetch(`https://server-jute-wooden.vercel.app/filter?email=${user.email}&customizable=Yes`)
            .then(res => res.json())
            .then(datas => {
                setdata(datas);
            })
        }else if(ans == "Customizable: No"){
            fetch(`https://server-jute-wooden.vercel.app/filter?email=${user.email}&customizable=No`)
            .then(res => res.json())
            .then(datas => {
                setdata(datas);
            })
        }
        
    }

    const [theme, settheme] = useState(localStorage.getItem('theme')? localStorage.getItem('theme') : "light")
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



    return (
        <div>
            <Helmet>
                <title>My Craft & Art</title>
            </Helmet>
            <div className='mt-14'>
                <div className='items-center flex flex-col'>
                    <h1 className='text-center mb-5'>My Art & Craft List</h1>

                    <div style={cardstyles} className='flex items-center justify-center mt-3 w-fit mb-4'>
                        <p  className=' p-4 rounded-lg'>Filter By Customization</p>
                        <select style={cardstyles} onChange={customizehandle}  required name='subcategory_Name' className="select  outline-none">
                            <option style={option} disabled selected>Chose An Option </option>
                            <option style={option}>Customizable: Yes</option>
                            <option style={option}>Customizable: No</option>
                        </select>
                    </div>
                </div>

                <div className='grid gap-5 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-20'>
                    {
                        data.map((item, i) => (
                            <div style={cardstyles}  key={i} className=' flex flex-col h-auto p-4 pb-6 rounded-lg animate__bounceIn'>
                                <div>
                                    <img src={item.photo} width={'100%'} alt="" className="rounded-xl h-[200px]" />
                                </div>
                                <a className='text-sm'>{item.stockStatus}</a>
                                <p className='text-blue-500 font-semibold text-lg py-1'>{item.name}</p>
                                <div className='flex items-center gap-2'>
                                    <Rating
                                        emptySymbol={<img src="/starempty.png" className="icon w-5" />}
                                        fullSymbol={<img src="/starfull.png" className="icon w-5" />}
                                        initialRating={item.rating}
                                        fractions={5}
                                        readonly
                                    />
                                    <p>{item.rating}</p>
                                </div>

                                <div>
                                   
                                    <p>Customizable: {item.customizable}</p>
                                </div>
                                <p className='text-black h-full text-xl font-semibold mb-2'>{item.price}</p>
                                <Link to={`/update/${item._id}`}>
                                <button className='w-full bg-blue-500 text-white'>Update</button></Link>
                                <button type='button' onClick={() => deletehandle(item._id)} className='w-full bg-red-400 text-white mt-2'>Delete</button>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default MyArt;