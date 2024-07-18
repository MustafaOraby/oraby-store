import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function TopHeader() {
    const { t } = useTranslation();
  return (
    <div className='   container  mx-auto px-5 flex items-center border-b-4 md:text-sm 	border-light-background dark:border-dark-background	'>
        <div className='hidden lg:flex  items-center flex-1 '>
            <span>{t("Follow us")} :</span>
            <div className='flex justify-between items-center '>
                <NavLink to="/" className='mx-2 text-blue-500 '><FaFacebookF/></NavLink>
                <NavLink to="/" className='mx-2 text-pink-500'><FaInstagram/></NavLink>
                <NavLink to="/" className='mx-2  text-blue-400'><FaTwitter/></NavLink>
            </div>
        </div>
        <div className='mx-auto text-sm flex-1 text-center text-blue-500 font-semibold'><p>{t("Main offers")}</p></div>
        <div className='hidden lg:flex  items-center flex-1 justify-end'>
            <div className='flex justify-between items-center mx-5 lg:mx-1'>
                <FaPhoneAlt className='mx-2 text-light-tertiary dark:text-purple-600 lg:text-xs'/>
                <span className='lg:text-xs'>(+98)253-1189</span>
            </div>
            <div className='flex justify-between items-center'>
                <FaEnvelope className='mx-2 text-light-tertiary dark:text-teal-600 lg:text-xs'/>
                <span  className='lg:text-xs'>pigmentagency@gmail.com</span>
            </div>
        </div>
        </div>
  )
}

export default TopHeader