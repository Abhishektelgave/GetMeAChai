import React from 'react'
import Link from 'next/link'
import Login from '../Login/page'

const Navbar = () => {
    return (
        <>
            <nav className="bg-[#121212] text-[#F1F1F1] w-full font-thin p-5 flex items-center justify-between">
                <div className="logo z-[999999] hover:text-[#FF6F61] flex items-center justify-center gap-2 cursor-pointer font-bold text-2xl">
                    <img src="/images/giphy.gif" width={40} alt="tea-gif" /><a  href="/">GetMeAChai!</a></div>
                {/* <ul className="flex z-[999999] items-center justify-evenly gap-5 ">
                    <li className=' cursor-pointer'>Home</li>
                    <li className=' cursor-pointer'>About</li>
                    <li className=' cursor-pointer'>Projects</li>
                    <li className=' cursor-pointer'>Sign UP</li>
                    <li className=' cursor-pointer'>Login</li>
                </ul>
                 */}
                <div className="li relative">
                    <Link id='login-button' className='relative transition-all ease-in-out overflow-hidden flex items-center rounded-full justify-center border border-[#ffffff]' href={'/login'}>
                        <div className='absolute w-full h-10 bg-[#3a3a3a] z-[9999] overflow-hidden '></div>
                        <div id='button-cursor' className="absolute hidden cursor-button h-[40px] w-[75px] z-[99999] rounded-full  top-0 left-0 border-black text-[#121212] justify-center font-bold items-center bg-[white] border">Login</div>
                        <div id="button-main" className='bg-transparent opacity-80 text-[#F1F1F1]  font-bold z-[999999] rounded-full px-5 p-2'>Login</div>
                    </Link>
                </div>
            </nav>
            <div className="bg-[#191919] opacity-75 h-1 w-full ">
            </div>
        </>
    )
}

export default Navbar
