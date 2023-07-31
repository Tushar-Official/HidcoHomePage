import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsTrophy} from 'react-icons/bs'
import logo from '../images/logo.png'

export const Header = () => {
    const tags=["Drugs","Calculators","Articles","News","Quizzes","Surveys","Webinars","Guidlines"]
  return (
    <>
    <div className='flex justify-between px-4 py-2 bg-slate-200'>
    <div className='logo'>
    <img src={logo} alt="/" className='w-20 h-5'/>
    </div>
    <div className='tags flex'>
    {
        tags.map((val,index)=>{
            return(
                <div key={index}>
                <span className='mx-1 text-sm font-medium'>{val} |</span>
            </div>
            )
            })
        
    }
    </div>
    <div className="icons flex mr-2 px-1 justify-evenly mx-2">
    <GiHamburgerMenu className='h-4 w-4 mr-4'/>
    <div className='flex rounded-xl mx-1 w-16 justify-center  border-2 border-black'>
    <BsTrophy className='w-4 h-4 m-1'/>
    <span className='mx-1 text-sm text-red-700 font-bold'>274</span>
    
    </div>
    <div className='rounded-full border-2 mx-1 border-black'>
    <span className='p-2'>A</span>
    </div>
    
    
    </div>
    
    </div>
    
    <div>
    <div className='caption text-center h-12 bg-cyan-100'>
    <h2 className='font-semibold text-xl py-2'>Your one-stop Solution for 
    <strong className='text-cyan-500 mx-1 font-semibold'>MEDICAL LEARNING & UPDATES</strong></h2>
    </div>
    <div className='search grid grid-cols-2 h-24 grid-row-1 bg-slate-100'>
    <div className='text text-right pt-8 '>
    <h2 className=' text-lg font-semibold'>Get knowledge of the <strong className='text-cyan-500 font-semibold'>APPROVED DRUGS</strong></h2>
    </div>
    <div className='search text-center pt-8'>
    <input type="text" placeholder='Enter drug type' className=' rounded-full bg-slate-200 text-center px-8 py-2' /><span className="absolute right-4 text-gray-400">
    <i className="fas fa-search"></i>
  </span>
    </div>
    </div>
    
    </div>
    </>
  )
}
