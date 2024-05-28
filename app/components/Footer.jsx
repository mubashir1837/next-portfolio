import { FaTelegram, FaTwitter, FaEnvelope, FaSkype, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-gray-800 py-8 mt-8 bg-[#1d1e50] lg:w-full">
      <div className="container mx-auto px-4 lg:px-4 text-center">
        <div className="my-4">
          <h3 className="text-lg font-semibold mb-2 text-white">Let&apos;s connect</h3>
          <p className="text-sm text-gray-400 mb-4 lg:text-center">
            Mystery Code is a blog website where you will find great tutorials on web design and development.
            Here each tutorial is beautifully described step by step with the required source code.
          </p>
          <ul className="flex justify-center space-x-4 mb-4">
            <li>
              <a href="mailto:mubashirali1837@gmail.com" className="hover:text-cyan-500">
                <FaEnvelope className="text-white" />
              </a>
            </li>
            <li>
              <a href="http://Wa.me/+923275882664" className="hover:text-cyan-500">
                <FaWhatsapp className="text-white" /> 
              </a>
            </li>
            <li>
              <a href="https://twitter.com/mubashiraliyaar" className="hover:text-cyan-500">
                <FaTwitter className="text-white" /> 
              </a>
            </li>
            <li>
              <a href="https://join.skype.com/invite/tbUVmyPL6ySt" className="hover:text-cyan-500">
                <FaSkype className="text-white" /> 
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@BismiAllah_coder" className="hover:text-cyan-500">
                <FaYoutube className="text-white" /> 
              </a>
            </li>
            <li>
              <a href="http://t.me/mubashir1837" className="hover:text-cyan-500">
                <FaTelegram className="text-white" /> 
              </a>
            </li>
          </ul>
          <ul className="flex justify-center space-x-4 mb-4">
            <li><a href="#" className="text-gray-400 hover:text-cyan-500">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-cyan-500">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-cyan-500">Contact</a></li>
            <li><a href="#" className="text-gray-400 hover:text-cyan-500">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-cyan-500">Articles</a></li>
          </ul>
          <div className="text-gray-400">
            Design By - <a href="https://groundtutorial.com" className="hover:text-cyan-500">Mubashir Ali</a>
          </div>
        </div>
      </div>  
    </footer>
  );
};

export default Footer;
