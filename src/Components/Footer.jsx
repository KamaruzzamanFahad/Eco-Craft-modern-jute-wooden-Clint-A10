import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className=" flex flex-col lg:flex-row gap-10 items-center  justify-between p-10 text-base-content bg-[#0000009e]">
        <div>
            <div className='flex items-center gap-2'>
                <div className='bg-yellow-500 p-[5px] h-1 w-1'></div>
                <p className='font-extrabold text-xl'>Our Partners</p>
            </div>
            <div className="mt-14">
                <img src="payments.png" alt="" className="w-52" />
            </div>
        </div>

        <div className='ml-[-60px] w-[60%] sm:w-auto '>
            <div className='flex items-center gap-2'>
                <div className='bg-yellow-500 p-[5px] h-1 w-1'></div>
                <p className='font-extrabold text-xl'>Contact Us
                </p>
            </div>
            <div className='flex items-center gap-2 text-lg mt-5'>
                <IoCall className='text-2xl' />
                <p>1-600-500-6730</p>
            </div>
            <div className='flex items-center gap-2 text-lg mt-3'>
                <MdOutlineEmail className='text-2xl' />
                <p>info@Eco-Craft.org</p>
            </div>
            <div className='flex items-center gap-2 text-lg mt-3'>
                <IoLocationSharp className='text-3xl' />
                <p>856 Grand Ave, Eco <br></br>
                    Uganda Way, FLCraft 565</p>
            </div>
        </div>

        <form >
            <div className='flex items-center gap-2'>
                <div className='bg-yellow-500 p-[5px] h-1 w-1'></div>
                <p className='font-extrabold text-xl'>Newsletter
                </p>
            </div>
            <fieldset className="form-control ">
                <label className="label mt-2">
                    <span className="label-text">Enter your e-mail to get the latest news of MyHome</span>
                </label>
                <div className="join mt-2 bg-red-600 w-[95%]">
                    <input type="text" placeholder="Your e-mail" className="input input-bordered join-item w-full" />
                    <button disabled className="bg-blue-500 text-white rounded-l-none ml-[-2px]">Subscribe</button>
                </div>
                <img src="socai.png" width={'30%'} alt="" className='mt-4' />
            </fieldset>
        </form>
    </footer>
    );
};

export default Footer;