import React from 'react'
import Usedata from '../API/useAPI'

export const DrugData = () => {

  const drugInfo=Usedata();
 const buttons=["Anesthesia","Cardiology","Critical Care","Dentistry","Dermatology","Diabetology"]
  return (
    <>
    
    <div className='grid grid-cols-2 text-center'>
    <div className='pt-2  w-1/2 ml-44'>
    <span className='text-xs '>Dailymed Drug Database : The DailyMed database contains 143072 labeling submitted to the Food and Drug Administration (FDA) by companies . 
    DailyMed does not contain a 
     complete listing of labeling for FDA-regulated products (e.g, labelling that is not submitted to the FDA)</span></div>
    <div className=' grid ml-36  grid-cols-3 grid-rows-2 mt-2 w-1/2 text-center '>
    
    {
        buttons.map((val,index)=>{
            return (
                <div key={index} className='justify-center text-center'>
                <button className='p-2 hover:bg-slate-100 mt-2 border-2 border-black w-30 rounded-lg'>{val}</button>
                </div>)
        })
    }
    
    </div>
    
    </div>
   <div className='drugtable flex justify-center mt-8 w-full px-24'>
   <table className='border-2 border-black mx-2 w-1/2 '>
   <thead>
        <tr>
          <th className='border-2 border-black'>Drug Name</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        {drugInfo.drugData && drugInfo.drugData.map((item, index) => (
          <tr key={index}>
            <td className='text-sm  '>{item.drugName}</td>
          </tr>
        ))}
      </tbody>
   </table>
   <table className='border-2 border-black mx-2 w-1/2 '>
   <thead>
        <tr>
          <th className='border-2 border-black'>Drug Details</th>
        </tr>
      </thead>
      <tbody className='text-center p-2'>
      { drugInfo.drugData && drugInfo.drugData.map((item, index) => (
        <tr key={index}>
          <td className='text-xs text-left border-black border-1 p-2'>{item.drugDetails}</td>
        </tr>
      ))}
      </tbody>
   </table>
   </div>
  
    
    
    
    </>
  )
}
