import 'tailwindcss/tailwind.css';
import BackgroundVideo from '../assets/Videos/BackgroundVideo.mp4';
import Logo from '../assets/rmFrh2fKMNYODW4ac7Em5-transformed.png'; // Adjust the path to your logo file
import InsideOImage from '../assets/Videos/Untitled design (2).mp4'; // Adjust the path to your inside O image file

function DoctorMouseLandingPage() {
    return (
        <>
            <div className="relative h-screen w-full flex items-center justify-center bg-black">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={BackgroundVideo}
                    autoPlay
                    loop
                    muted
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="absolute top-4 left-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 z-20 transform perspective-500">
                    <video
                        src={InsideOImage}
                        autoPlay
                        loop
                        muted
                        alt="Coin Video"
                        className="w-full h-full object-contain transform translate-z-10 shadow-lg"
                    />
                </div>

                <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4">
                    <div className="relative flex items-center justify-center">
                        <h1 className="absolute text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[15rem] font-bold -mt-44 bg-gradient-to-r from-[#304761] to-[#d2d1d6] text-transparent bg-clip-text opacity-100">
                            DOCTOR<br /> MOUSE
                        </h1>
                        <img
                            src={Logo}
                            alt="Logo"
                            className="relative w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/2 sm:mt-40 mx-10 ml-44 md:ml-80 z-10 lg:mt-80"
                        />
                    </div>
                </div>
            </div>
            <div className='h-20 w-full bg-black'></div>
            
            
        </>
    );
}

export default DoctorMouseLandingPage;
