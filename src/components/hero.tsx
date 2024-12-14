import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export function HeroSection() {
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse items-center lg:items-start border border-base-content p-36 rounded-xl">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Andhika Gama Pratama"
        />
        <div className="text-center lg:text-left pr-6 pt-20">
          <h1 className="text-3xl text-base-content">Hi, I&apos;m</h1>
          <h1 className="text-5xl text-base-content font-extrabold">
            Andhika Gama Pratama
          </h1>
          <p className="py-6 text-xl text-base-content ">
            I am a <b>full-stack developer</b>.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-4 bg-base-200  absolute bottom-20 lg:py-4 p-3 px-20 rounded-full border border-base-content" >
        
        <a
          href="https://www.linkedin.com/in/andhika-gama-pratama-4701191ba/"
          target="_blank"
          rel="noopener noreferrer" 
        >
          <FaLinkedin className="text-2xl text-base-content hover:text-blue-700" />
        </a>
        <a
          href="https://github.com/LatteMacchiato123"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl text-base-content hover:text-gray-600" />
        </a>
        <a
          href="https://twitter.com/andhikagamap"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl text-base-content hover:text-pink-500" />
        </a>
      </div>
      <div ></div>
    </div>
    
  );
}
