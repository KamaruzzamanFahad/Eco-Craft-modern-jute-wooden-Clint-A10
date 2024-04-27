
import Rating from 'react-rating';
import { useEffect, useState } from 'react';


const AllArt = () => {

    const [craft, setcraft] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/craft')
            .then(res => res.json())
            .then(data => {
                setcraft(data);
            })
    }, [])


    return (
        <div>
            <div className='mt-14'>
                <div>
                    <h1 className='text-center mb-2'>All Art & craft Items</h1>
                    <p className='px-[10%] text-center mb-10'>Welcome to our All Art & craft Items section, your one-stop shop for all things handmade magic! Whether you're a seasoned crafter or just starting your creative journey, we have something to inspire you.</p>
                </div>

                <div className='grid gap-5 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        craft.map((item, i) => (
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
                                <button className='w-full bg-blue-500 text-white'>View Details</button>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default AllArt;