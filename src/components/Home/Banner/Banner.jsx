import React from 'react';
import banner from '../../../assets/images/cover.jpg'
const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})` }}
        className=" bg-cover bg-center">
            <div className='py-44 px-12'>
                <h1 className='lg:text-7xl md:text-5xl text-3xl font-semibold '>Breath Natural</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem necessitatibus iusto inventore laboriosam enim exercitationem velit dolores ea ipsam dignissimos.</p>
                <button>Explore More Plants</button>
            </div>
        </div>
        // <div className="relative h-screen bg-fixed bg-center bg-cover" 
        // style={{ backgroundImage: `url(${banner})`}}
        // >
        //     <div className="absolute inset-0 bg-black bg-opacity-50">
        //         <header className="relative z-10 text-white p-8">
        //             <h1 className="text-5xl font-bold">Breath Natural</h1>
        //             <p className="text-lg mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //             <div className="mt-6 flex gap-4">
        //                 <button className="px-6 py-2 bg-green-500 text-white rounded">Explore</button>
        //                 <button className="px-6 py-2 border border-white rounded">Live Demo</button>
        //             </div>
        //         </header>

        //         <section className="relative z-10 flex flex-wrap justify-center gap-8 mt-20">
        //             <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md">
        //                 <img src="path-to-plant-image1.jpg" alt="Plant" className="w-full h-64 object-cover rounded" />
        //                 <h3 className="text-2xl mt-4">For Small Desk AI Plant</h3>
        //                 <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //                 <p className="mt-4 font-bold">Rs. 599/-</p>
        //                 <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Buy Now</button>
        //             </div>
        //             <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md">
        //                 <img src="path-to-plant-image2.jpg" alt="Plant" className="w-full h-64 object-cover rounded" />
        //                 <h3 className="text-2xl mt-4">Trendy House Plant</h3>
        //                 <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //                 <p className="mt-4 font-bold">Rs. 599/-</p>
        //                 <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Buy Now</button>
        //             </div>
        //         </section>
        //     </div>
        // </div>
    );
};

export default Banner;