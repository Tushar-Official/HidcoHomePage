import React from 'react'
import logo from '../images/logo.png'
import {FiFacebook} from 'react-icons/fi'
import {FaInstagram ,FaYoutube,FaLinkedin} from 'react-icons/fa'
import {AiFillFolder,AiOutlineCalculator,AiFillVideoCamera,AiOutlineTrophy} from 'react-icons/ai'
import {FcDocument} from 'react-icons/fc' 
import {BsFillClipboardFill} from 'react-icons/bs'
export const Footer = () => {
  return (
    <div className='footer mt-8 pt-4 bg-blue-950  justify-center '>
    <div className='upperData w-full flex justify-center pb-4 '>
    <div className='leftData w-1/3 pl-12   bg-blue-950 text-white'>
    <table>
    <tr>
    <th><img src={logo} alt="" className='w-48 h-16 my-1 mx-1'/></th>
    </tr>
    <tr className='pt-4 pr-2'>
    <td className='pt-4'><span className='text-xs mx-2'>Fastest Growing Medical Platform for Doctors</span>
    <div className='socialLogos flex pt-4 px-12'>
    <FiFacebook className='mx-2 w-4 h-4'/>
    <FaInstagram className='mx-2'/>
    <FaYoutube className='mx-2'/>
    <FaLinkedin className='mx-2'/>

    </div>
    </td>
    </tr>
    </table>
    </div>
    <div className='middleData w-1/3  justify-center  bg-blue-950 text-white'>
    <table>
    <tr className='text-left font-semibold text-xl'><th>Reach us</th></tr>
    <tr className='text-xs'><td className='pt-4'>Please contact the below details for any other information</td></tr>
    <tr className='text-xs'><td className='pt-4'>Email:<br/>info@hidco.co</td></tr>
    <tr className='text-xs'><td className='pt-4'>Address : <br/>Hidco Dr. Inc, 2055 Limestone Rd,STE 200-C, <br/>Wilmington DE, 19808,United States</td></tr>
    </table>
    </div>
    <div className='rightData w-1/3 pl-8'>
    <table className=' h-full   bg-blue-950 text-white'>
    <thead className=''>
      <tr>
        <th colSpan="4" className='font-bold text-left pb-2'>HIDOC DR. FEATURES</th>
      </tr>
      
    </thead>
    <tbody >
     
      <tr className=' text-center'>
        <td className=' p-4 bg-sky-200'>
        <AiFillFolder className='w-8 text-center h-8 bg-sky-400 rounded-full p-1' />
        <label className='text-xs font-medium text-sky-400'>Drug Database</label></td>
        <td className='p-4 bg-red-200'><AiFillVideoCamera className='w-8 h-8 bg-red-500 rounded-full p-2 text-center' /><label className='text-xs text-red-600'>Webinars</label></td>
        <td className=' p-4 bg-blue-100'><FcDocument className='w-8 h-8 bg-blue-500 rounded-full p-2 text-center' /><label className='text-xs text-blue-400'>Drug Interaction</label></td>
        <td className=' p-4 bg-green-200'><AiOutlineCalculator className='w-8 h-8 bg-green-400 rounded-full p-1 text-center' /><label className='text-xs text-green-600'>Medical Calculator</label></td>
      </tr>
      {/* Third row */}
      <tr className=''>
      <td className=' p-4 bg-orange-100'><FcDocument className='w-8 h-8 bg-orange-400 rounded-full p-1 text-center' /><label className='text-xs text-orange-600'>Articles</label></td>
        <td className=' p-4  bg-blue-100'><AiOutlineTrophy className='w-8 h-8 bg-blue-500 rounded-full text-center p-2' /><label className='text-xs  text-blue-400'>Quizzes</label></td>
        <td className=' p-4 bg-sky-200'><FcDocument className='w-8 h-8 bg-sky-400 rounded-full p-1 text-center' /><label className='text-xs text-sky-400'>Disease Database</label></td>
        <td className=' p-4 bg-red-200'><BsFillClipboardFill className='w-8 h-8 bg-red-500 rounded-full p-2 text-center' /><label className='text-xs text-red-600'>Surveys</label></td>
      </tr>
     
      
    </tbody>
  </table> 
    
    </div>
    
    </div>
    <div className='bottomData w-full text-center pt-2 bg-slate-200'>
    <h3 className='text-xs p-2'>Copyright 2022 <strong>Hidoc Dr.Inc.</strong><br/>Terms & Conditions | Privacy Policy</h3>
   
    </div>
    
    </div>
  )
}
