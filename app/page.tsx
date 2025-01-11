'use client'
import Image from 'next/image';
import { LinkCard } from "./icons";
import data from "../data/data.json";
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8 pb-10">
      {isClient && (
        <>
          <div className="relative h-48 w-48">
            <Image
              priority
              className="rounded-full object-cover"
              alt={data.name}
              src={data.avatar}
              fill
              style={{ objectPosition: 'center top' }} 
            />
          </div>


          <h1 className="font-bold mt-4 mb-2 text-3xl text-white text-center">{data.name}</h1> 
          <h5 className='mb-6 text-[#DDDDDD] text-center'>~ALFIAN~</h5>
          {data.links.map((link) => (
            <LinkCard key={link.href} {...link} />
          ))}
      
        </>
      )}
    </div>
  );
}
