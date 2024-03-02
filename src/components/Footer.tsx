import React from "react"
import Image from "next/image"
import { Company_LINKS } from "@/app/utils/companylinks"
import Link from "next/link"
import { Contacts_LINKS } from "@/app/utils/contacts_Links"
import { Support_LINKS } from "@/app/utils/support_Links"
import SocialFollow from '@/components/SocialFollow'
const Footer = () => {
  return (
    <>

<div className='flex justify-between px-20 py-20  '>
  {/* First div with flex-grow-1 to take remaining space */}
  {/* <div className='flex-grow-1 bg-red-700'> */}
    <div className='grid grid-cols-1 grid-rows-2 '>
      <div className='flex  '>
        <Link href={"/"}>
          <Image
          src={"/images/Logo.webp"}
          alt="logo-image"
          width={140}
          height={25}/>
        </Link>
        </div>
      <div className=''>
        <p>
        Small, artisan label that offers a <br />
        thoughtfully curated collection of <br />
        high quality everyday essentials made. <br />
        </p> 
        {/* <SocialIcon network="twitter" bgColor="#ff5a01" /> */}
     <div>
      <SocialFollow/>
      </div>
      </div>
    {/* </div> */}
  </div>

  {/* Second div Company */}
  <div className=''>
  <div>
  <h3 className="font-semibold mb-3 font-semibold text-2xl text-gray-500 ">Company</h3>
 <div className="grid grid-col-1 gap-2 items-center ">
 {Company_LINKS.map((link, index) => (
  <Link key={index} href={link.href}>
    <p>{link.name}</p>
  </Link>
))}
         </div>
      </div>
  </div>

  {/* Third div Support */}
  <div className=''>
  <h3 className="font-semibold mb-3 font-semibold text-2xl text-gray-500 ">Support</h3>
  <div className="grid grid-col-1 gap-2 items-center ">
        {Support_LINKS.map((link,index) => (
          <Link href={link.href} key={index}>
            <p >{link.name}</p>
          </Link>
        ))}
      </div>
  </div>

  {/* Fourth div contac us */}
  <div className='bg-steel-blue-200'>
  <h3 className="font-semibold mb-3 font-semibold text-2xl text-gray-500 ">Contact</h3>
  <div className="grid grid-col-1 gap-2 items-center ">
        {Contacts_LINKS.map((link,index) => (
          <Link href={link.href} key={index} >
            <p  >{link.name}</p>
          </Link>
        ))}
        </div>
  </div>
</div>


<div className="flex justify-between items-center p-10 border">
  <p>Copyright © 2022 <br />Dine Market</p>
  <p>Designed By <b>Mobi <br />Design Studio</b></p>
  <p>Code By: <b>Mubashar Bashir <br />on GitHub</b></p>
</div></>
    
  )
}

export default Footer