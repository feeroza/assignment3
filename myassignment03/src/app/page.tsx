import Image from "next/image";
import React from "react";
export default function Home() {
  return (
    <div className='bg-pink-800 flex items-center justify-between h-screen ml-1 m'> 
     <div className='w-1/2 mr-6 ml-20 m'>
     <h1 className=" text-slate-900 text-5xl font-extrabold">Diamond Ring </h1>
    <br/>
     <h2 className='text-green-400  text-2xl font-bold forced'> 100% Natural Conflict-Free Diamonds</h2>
<h2 className='text-green-400  text-2xl font-bold forced'>14k White Gold Jewelry</h2><br/>
<h3 className='text-orange-400  text-1xl font-bold forced'>White Gold, Diamond
Metal typeWhite Gold
Gem typeSapphire, Diamond</h3>
<h3 className='text-orange-400 text-1xl font-bold forced'>Ring size4</h3>
<h3 className='text-orange-400 text-1xl font-bold forced'>MaterialSapphire,</h3>
<h3 className='text-orange-400 text-1xl font-bold forced'>Vintage style-style Sapphire Engagement Ring</h3>
<h3 className='text-orange-400 text-1xl font-bold forced'>Made in USA with Eco-Friendly 100% Conflict-FreeMaterials. Designed and manufactured by Kobelli from Los Angeles, California.</h3>
<br/>

    
      </div>

      <div className='w-1/2 ml-40 mt-5'>
      <Image
       src={"/diamondring.jpg"}     
       alt="diamond-image"
      width={500}
      height={900}/>
    
      </div>
    </div>
  );
}
