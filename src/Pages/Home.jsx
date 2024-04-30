import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Rating from 'react-rating';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';;
import { Helmet } from "react-helmet-async";
import { Typewriter } from 'react-simple-typewriter'
import 'animate.css';

const Home = () => {
    const [craft, setcraft] = useState([])
    const [subcatagory, setsubcatagory] = useState([])



    useEffect(() => {
        fetch('https://server-jute-wooden.vercel.app/craft')
            .then(res => res.json())
            .then(data => {
                const slicedData = data.slice(0, 6);
                setcraft(slicedData)
            })
    }, [])

    useEffect(() => {
        fetch('https://server-jute-wooden.vercel.app/subcatagory')
            .then(res => res.json())
            .then(data => {
                setsubcatagory(data)
            })
    }, [])

    const [theme, settheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light")
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

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }




    return (
        <div className={`${theme}`}>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                loop={true}
                className="mySwiper z-0"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
            >
                <SwiperSlide>
                    <div id="slide1" className="carousel-item relative h-[35vw] w-full">
                        <img src="slid1.jpg" className="w-full" />

                        <div className='absolute top-[10%] sm:top-[20%] md:top-[30%] text-center w-full'>
                            <h1 className='sadobl text-white font-semibold text-2xl  md:text-4xl'>Wooden furniture</h1>
                            <p className='sadobl text-white px-[15%] sm:px-[20%] md:px-[25%]'>
                                Immerse yourself in the warmth and beauty of handcrafted wooden furniture. This showcase features exquisite pieces made with care and traditional techniques, </p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="slide2" className="carousel-item relative h-[35vw] w-full">
                        <img src="slid2.jpg" className="w-full" />

                        <div className='absolute top-[10%] sm:top-[20%] md:top-[30%] text-center w-full'>
                            <h1 className='sadobl text-white font-semibold text-2xl  md:text-4xl'> wooden kitchenware</h1>
                            <p className='text-white px-[15%] sm:px-[20%] md:px-[25%] sadobl'>Wooden kitchenware brings warmth and beauty to your kitchen.  From spoons and spatulas to rolling pins and cutting boards </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="slide4" className="carousel-item relative h-[35vw] w-full">
                        <img src="slid4.jpg" className="w-full" />
                        <div className='absolute top-[10%] sm:top-[20%] md:top-[30%] text-center w-full'>
                            <h1 className='sadobl text-white font-semibold text-2xl  md:text-4xl'>Natsuki Takauji</h1>
                            <p className='text-white px-[15%] sm:px-[20%] md:px-[25%] sadobl'>interactive, abstracted furniture, wood and steel outdoor sculpture</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>


            <div className={`mt-14 ${theme}`}>
                <div>
                   <div className='flex items-center justify-center mb-4'>
                   <h1 className='text-center'>
                   Craft{' '}
                        <span style={{ color: 'red', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Items', 'Items Section']}
                                loop={true}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </span>
                    </h1>
                   </div>
                    <p className='px-[10%] text-center mb-10'>Welcome to our Craft Items section, your one-stop shop for all things handmade magic! Whether you're a seasoned crafter or just starting your creative journey, we have something to inspire you.</p>
                </div>

                <div className='grid gap-5 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        craft.map((item, i) => (
                            <div style={cardstyles} key={i} className={`bg-[#eeeeee] flex flex-col h-auto p-4 pb-6 animate__backOutUp rounded-lg animate__bounceIn ${""}`}>
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
                                <Link to={`/detils/${item._id}`}>
                                    <button className='w-full bg-blue-500 text-white'>View Details</button></Link>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className='mb-10'>
                <div>
                    <h1 className='text-center mt-14 mb-2'>Art & Craft Categories</h1>
                    <p className='px-[10%] text-center mb-10'>Dive into traditional mediums like painting, drawing, and pottery, or explore modern trends like resin art, digital illustration, and jewelry making.</p>
                </div>

                <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
                    {
                        subcatagory.map((item, i) => (


                            <Link key={i} to={`/allsub/${item.sub_catagoryname}`}>
                                <div style={cardstyles} className=' animate__fadeInBottomRight flex gap-2 items-center bg-[#ebebeb] rounded-lg p-5 py-2'>
                                    <img src={item.image} alt="" className='w-10 rounded-lg' />
                                    <h2>{item.sub_catagoryname}</h2>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>


            <div style={cardstyles} className=' p-10 mt-20'>
                <div>
                    <h1 className='text-center  mb-2'>Custom Art & Craft</h1>
                    <p className='px-[10%] text-center mb-10'>Send requests to create customizable art of your choice, and enjoy the best of art, Craft, digital illustration, and jewelry.</p>
                </div>

                <div >
                    <form action="" className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                        <div>
                            <h2 className='mb-2 font-semibold'>Item_Name</h2>
                            <input style={fildinput} required className='w-full p-2 outline-none' type="text" placeholder='Enter item name' name='name' />
                        </div>
                        <div>
                            <h2 className='mb-2 font-semibold'>Category Name</h2>
                            <input style={fildinput} required className='w-full p-2 outline-none' type="text" placeholder='Enter Item Category Name' name='subcategory_Name' />
                        </div>
                        <div>
                        </div>
                        <div className='md:col-span-2'>
                            <h2 className='mb-2 font-semibold'>Detils</h2>
                            <textarea style={fildinput} required className='w-full p-2 outline-none' name="detils" cols="30" rows="5" placeholder='Enter Detils information about what you need'></textarea>

                        </div>

                        <button style={fildinput} disabled className='md:col-span-2 bg-[#d1d1d1] text-[#331A15] border-2 border-[#331A15] rounded-sm font-bold'>Requiest For Custom Item</button>
                    </form>
                </div>
            </div>

            <div className='mt-20 pb-20'>
                <div>
                    <h1 className='text-center  mb-2'> Upcoming Art & Craft</h1>
                    <p className='px-[10%] text-center mb-10'>Get ready to be amazed! More of our exquisite, handcrafted pieces are arriving next week.</p>
                </div>

                <div className='grid grid-cols-1 gap-8  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    <div style={cardstyles} className='bg-[#ededed]  p-3 rounded-xl'>
                        <img src="/Whimsical Wonders.jpg" alt="" className='w-full rounded-xl' />
                        <h2 className='text-center font-semibold text-xl'>Whimsical Wonders</h2>
                    </div>

                    <div style={cardstyles} className='bg-[#ededed] p-3 rounded-xl'>
                        <img src="/Wooden Picture Frames with Jute Accents.jpg" alt="" className='w-full rounded-xl' />
                        <h2 className='text-center font-semibold text-xl'>Wooden Picture Frames with Jute Accents</h2>
                    </div>

                    <div style={cardstyles} className='bg-[#ededed] p-3 rounded-xl'>
                        <img src="/Jute and Wood Plant Hangers.jpg" alt="" className='w-full rounded-xl' />
                        <h2 className='text-center font-semibold text-xl'>Jute and Wood Plant Hangers</h2>
                    </div>

                    <div style={cardstyles} className='bg-[#ededed] p-3 rounded-xl'>
                        <img src="/ute and Wood Storage Baskets.jpg" alt="" className='w-full rounded-xl' />
                        <h2 className='text-center font-semibold text-xl'>Jute and Wood Storage Baskets</h2>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;