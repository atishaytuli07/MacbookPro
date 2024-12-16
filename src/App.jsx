import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ScrollControls } from '@react-three/drei';
import './style.css';
import MacbookContainer from './macbookContainer';

const App = () => {
  return <div className='w-full h-screen'>
        <nav className=" text-sm flex justify-center items-center absolute top-1 left-1/2 -translate-x-1/2 text-white font-[500] w-fit h-12 bg-black/20 backdrop-blur-md border-b border-white/50">
      <ul className="flex gap-8">
        <li></li>
        <li>Store</li>
        <li>Mac</li>
        <li>Mac Pro</li>
        <li>iPad</li>
        <li>iPhone</li>
        <li>iPhone +</li>
        <li>Watch</li>
        <li>AirPods</li>
        <li>TV & Home</li>
        <li>Support</li>
      </ul>
    </nav>
    <div className="flex flex-col  items-center absolute top-40 left-1/2 -translate-x-1/2 font-[Helvetica_Now_Display] text-white"> 
    <h3 className='text-5xl tracking-tighter font-[700]'>Macbook Pro.</h3>
    <div className="mt-7 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 via-red-500 via-orange-500 to-yellow-500 animate-gradient-x font-bold text-5xl">
      Built with Apple Intelligence.
    </div>

    <p className='text-md text-center w-3/4 mt-12 font-medium'>Supercharged by M3 Pro and M3 Max chips. Up to 22 hours of battery life. A stunning Liquid Retina XDR display. And now in space black with performance and incredible power efficiency.</p>
    <h5 className='text-xl font-[500] mt-4 font-semibold'>OOOOOOOhhhh So Pro !!</h5>
    </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
    <OrbitControls />
    <Environment files={"https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"} />
    <ScrollControls pages={3}>
      <MacbookContainer />
    </ScrollControls>    
  </Canvas>
  </div>
}

export default App