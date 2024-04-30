import Rating from 'react-rating';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
const SubCatagory = () => {
    const data = useLoaderData();
    console.log(data)
    const catagoryname = useParams()

    const [theme, settheme] = useState(localStorage.getItem('theme')? localStorage.getItem('theme') : "light")
    window.addEventListener('click', function (event) {
        if (event.target.classList[0] == "toggle") {
            const theme = localStorage.getItem('theme')
            settheme(theme)
        }
    });
    const cardstyles = {
        color: (theme == "light") ? 'black' : 'rgb(240, 240, 240)',
        'background-color': (theme == "light") ? '#eeeeee' : '#ffffff22',
    };

    const fildinput = {
        color: (theme == "light") ? 'black' : 'rgb(240, 240, 240)',
        'background-color': (theme == "light") ? 'white' : '#ffffff22',
    };

    return (
        <div>
            <Helmet>
                <title>{catagoryname.id}</title>
            </Helmet>
            <div className='mt-14'>
                <div>
                    <h1 className='text-center mb-5'>{catagoryname.id}</h1>
                </div>

                <div className='grid gap-5 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-20'>
                    {
                        data.map((item, i) => (
                            <div style={cardstyles} key={i} className=' flex flex-col h-auto p-4 pb-6 rounded-lg animate__bounceIn'>
                                <div>
                                    <img src={item.photo} width={'100%'} alt="" className="rounded-xl h-[200px]" />
                                </div>
                                <a className='text-sm'>{item.subcategory_Name}</a>
                                
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
                                    <p className='mb-2'>Processing time: {item.processing_time}</p>
                                    <p>{item.detils}</p>
                                </div>
                                <p className='text-black h-full text-xl font-semibold mb-2'>{item.price}</p>
                                <Link to={`/detils/${item._id}`}>
                                    <button className='w-full bg-blue-500 text-white'>View Details</button></Link>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default SubCatagory;