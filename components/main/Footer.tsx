import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
  RxBox,
  RxFramerLogo,
  RxEnvelopeClosed,
} from "react-icons/rx";

import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    
                    <a href="https://github.com/raja17021998" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>    
                        </p>
                    </a>

                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Mediaaa</div>

                    <a href="https://www.instagram.com/shashwat.bhardwaj.1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaInstagram />
                            <span className="text-[15px] ml-[6px]">Instagram</span>    
                        </p>
                    </a>


                    <a href="https://www.linkedin.com/in/shashwatbhardwaj1702/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>    
                        </p>
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxEnvelopeClosed />
                        <span className="text-[15px] ml-[6px]">shashwat.bhardwaj1998@gmail.com</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxEnvelopeClosed />
                        <span className="text-[15px] ml-[6px]">aiy237528@iitd.ac.in</span>    
                    </p>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer