import React from 'react'
import Usedata from '../API/useAPI'
import photo from '../images/data.jpeg'

export const Article = () => {
  
  const articleInfo=Usedata();
  console.log(articleInfo)
  const newsTitle = articleInfo.exploreMore?.news?.title || '';
  const newsDescription = articleInfo.exploreMore?.news?.description || '';
  const articleTitle = articleInfo.exploreMore?.article?.articleTitle || '';
  const metaDescription = articleInfo.exploreMore?.article?.metaDescription || '';
  
  return (
    <div className='Articles flex h-72  mt-8 text-center w-full'>
    <div className='leftArticle w-1/2 h-68'>
    <table className='w-full  mx-8 h-full '>
    <thead>
        <tr>
          <th colSpan="2" className='font-extrabold text-xl'>Explore more on Hidoc Dr.</th>
        </tr>
      </thead>
      <tbody>
        <tr className='w-1/2'>
          <td rowSpan="2" ><img src={photo} alt="" className='w-96 pl-4 h-56'/></td>
          
          <td className='text-lg text-left font-semibold pl-4'>{newsTitle}
          </td>
        </tr>
        <tr>
          <td className='text-lg text-left pl-4 font-light'>{newsDescription}</td>
        </tr>
        
      </tbody> 
  </table>
    </div>
    <div className='bg-slate-100 w-1 h-72 mx-8'></div>
    <div className='rightArticle w-1/2 h-full mx-4'>
    <table className=' w-full px-4  '>
      <thead>
        <tr className='text-left'>
          <th colSpan="2"><span className='text-xs font-extralight text-slate-400'>CRITICAL CARE . 10 MAR 2023</span></th>
        </tr>
      </thead>
      <tbody>
        <tr className=' text-left grid grid-row-2'>
          <td rowSpan="2"><h4 className='font-bold text-xl'>{articleTitle}</h4>
          <h5 className='text-lg font-light'>{metaDescription}</h5></td>
         
        </tr>
        
        <tr className=' text-left pt-20 grid grid-row-2'>
          <td rowSpan="2"><h4 className='font-bold text-xl'>{articleTitle}</h4>
          <h5 className='text-lg font-light'>{metaDescription}</h5></td>
         
        </tr>
        
       
      </tbody>
      </table>
    </div>
    </div>
  )
}
