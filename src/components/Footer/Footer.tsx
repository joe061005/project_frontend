import React from 'react'
import Image from 'next/image'
import wordPress from '../../../public/wordpress.png'

const Footer = () => {
  return (
    <div className='h-12 text-sm flex items-center justify-between '>
        <div className='text-sb'>©2023 BertPredict. All rights reserved.</div>
        <div className="flex items-center gap-2.5">
            <Image src={wordPress} alt=""  width={25} height={25} className='cursor-pointer opacity-70'></Image>
        </div>

    </div>
  )
}

export default Footer