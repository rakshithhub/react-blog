import { FaFacebook, FaInstagram, FaTwitter, FaGooglePlusG, FaYoutube  } from "react-icons/fa";

const Footer = () => {
  return (
    <>
                <div className="mt-52">
            <div className="bg-slate-800 px-7 py-12">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center gap-10">
                        <div className="h-12 w-12 rounded-full bg-white flex justify-center items-center">
                            <FaFacebook className="text-3xl"/>
                        </div>
                        <div className="h-12 w-12 rounded-full bg-white flex justify-center items-center">
                            <FaInstagram className="text-3xl"/>
                        </div>
                        <div className="h-12 w-12 rounded-full bg-white flex justify-center items-center">
                            <FaTwitter className="text-3xl"/>
                        </div>
                        <div className="h-12 w-12 rounded-full bg-white flex justify-center items-center">
                            <FaGooglePlusG className="text-3xl"/>
                        </div>
                        <div className="h-12 w-12 rounded-full bg-white flex justify-center items-center">
                            <FaYoutube className="text-3xl"/>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-10 mt-10 text-white font-bold text-xl">
                        <div className="">
                            <p>Home</p>
                        </div>
                        <div className="">
                            <p>About</p>
                        </div>
                        <div className="">
                            <p>News</p>
                        </div>
                        <div className="">
                            <p>Contact Us</p>
                        </div>
                        <div className="">
                            <p>Our Team</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="px-7 py-5 bg-slate-950">
                
                    <p className="text-white text-center"> &#169; Copyright 2024, Designed by <b>Rakshit Chaurasia</b></p>
            </div>
        </div>
    </>
  )
}

export default Footer