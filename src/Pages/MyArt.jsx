import Rating from 'react-rating';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const MyArt = () => {
    const [data, setdata] = useState([])

    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/craft/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setdata(data)
            })
    }, [])



    return (
        <div>
        <div className='mt-14'>
            <div>
                <h1 className='text-center mb-5'>My Art & Craft List</h1>
            </div>

            <div className='grid gap-5 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    data.map((item, i) => (
                        <div key={i} className='bg-[#eeeeee] flex flex-col h-auto p-4 pb-6 rounded-lg animate__bounceIn'>
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
                                <p>Processing time: {item.processing_time}</p>
                                <p>Customizable: {item.customizable}</p>
                            </div>
                            <p className='text-black h-full text-xl font-semibold mb-2'>{item.price}</p>
                            <button className='w-full bg-blue-500 text-white'>Update</button>
                            <button className='w-full bg-red-400 text-white mt-2'>Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>

    </div>
    );
};

export default MyArt;