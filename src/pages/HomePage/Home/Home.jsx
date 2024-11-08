import React from 'react';
import vector from '../../../assets/Vector.svg';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center my-10">
                {/* Background image on the left, adjusting size for mobile */}
                <div
                    style={{ backgroundImage: `url(${vector})` }}
                    className="bg-cover bg-no-repeat bg-left h-40 w-full md:h-64 md:w-64"
                ></div>

                {/* Main content on the right */}
                <div className="flex flex-col space-y-4 w-full md:w-2/3 mt-6 md:mt-0 md:mx-8 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-black">
                        We are a leading sustainable-inspired, 100% export-oriented readymade garments powerhouse
                    </h2>
                    <button className="btn bg-green-700 hover:bg-green-600 text-white border-none font-bold w-28">About us</button>
                </div>
            </div>

            <Slider />
        </div>
    );
};

export default Home;