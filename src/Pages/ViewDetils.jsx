import { useLoaderData } from "react-router-dom";
import Rating from 'react-rating';
const ViewDetils = () => {
    const data = useLoaderData();
    const { _id,
        name,
        subcategory_Name,
        price,
        rating,
        processing_time,
        detils,
        photo,
        customizable,
        stockStatus,
        username,
        email } = data[0];

    return (
        <div>
            <div className="flex flex-col md:flex-row gap-10 p-5 pb-10">
                <div className="w-[100%] md:w-[50%]">
                    <img src={photo} alt="" className="w-full" />
                </div>

                <div className="w-[100%] md:w-[50%]">
                    <p className="font-semibold text-xl">Add by: {username}</p>
                    <p className="font-semibold mb-5">{email}</p>
                    <h1>{name}</h1>
                    <p>{subcategory_Name}</p>
                    <div className='flex items-center gap-2 py-2'>
                        <Rating
                            emptySymbol={<img src="/starempty.png" className="icon w-5" />}
                            fullSymbol={<img src="/starfull.png" className="icon w-5" />}
                            initialRating={rating}
                            fractions={5}
                            readonly
                        />
                        <p>{rating}</p>
                    </div>
                    <h1 className="text-3xl font-semibold">{price}</h1>
                    <p className="mt-2">{stockStatus}</p>
                    <p className="mt-2">Is Customizable: {customizable}</p>
                    <p className="mt-2">Processing Time: {processing_time}</p>
                    <p className="font-semibold mt-2">Discription:</p>
                    <p>{detils}</p>

                    <div className="flex items-center mt-2">
                        <input className="w-14 p-2 border-[1px] border-[#e3e3e3] mr-4" type="number" name="" defaultValue={1} id="" />
                        <button className="rounded-full text-white bg-black w-full mr-2 md:mr-10">Request For Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetils;


