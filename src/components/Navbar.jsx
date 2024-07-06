import Logo from "../assets/kevinRushLogo.png";
 import { FaLinkedin } from "react-icons/fa";
// import {faGithup } from "react-icons/fa";
// import {faSqareXTwitter, FaSquareXTwitter } from "react-icons/fa6";
 import {FaInstagram } from "react-icons/fa";
 import { motion } from "framer-motion";

const Navbar = () => {
    return (
       <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            {/* <img className="mx-2 w-10" src={Logo} alt="logo" /> */}
            <motion.h1
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{ duration: 1}}
             className="mx-2 w-10 text-3xl "> IA</motion.h1>
        </div>
         <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin/>
            <FaInstagram/>
            
        </div> 
       </nav>
    );
};

export default Navbar;