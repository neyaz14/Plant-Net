import Container from '../Container'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import avatarImg from '../../../assets/images/placeholder.jpg'
import logo from '../../../assets/images/logo-flat.png'
// import { , AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
  const { user, logOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    // <div className='fixed w-full bg-[#2F3E34] z-10 shadow-sm'>
    //   <div className='py-4 border-b-[1px]'>
    //     <Container>
    //       <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
    //         {/* Logo */}
    //         <Link to='/'>
    //           <img src={logo} alt='logo' width='100' height='100' />
    //         </Link>
    //         {/* Dropdown Menu */}
    //         <div className='relative'>
    //           <div className='flex flex-row items-center gap-3'>
    //             {/* Dropdown btn */}
    //             <div
    //               onClick={() => setIsOpen(!isOpen)}
    //               className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
    //             >
    //               <AiOutlineMenu />
    //               <div className='hidden md:block'>
    //                 {/* Avatar */}
    //                 <img
    //                   className='rounded-full'
    //                   referrerPolicy='no-referrer'
    //                   src={user && user.photoURL ? user.photoURL : avatarImg}
    //                   alt='profile'
    //                   height='30'
    //                   width='30'
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //           {isOpen && (
    //             <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-[#2F3E34] overflow-hidden right-0 top-12 text-sm'>
    //               <div className='flex flex-col cursor-pointer'>
    //                 <Link
    //                   to='/'
    //                   className='block md:hidden px-4 py-3 hover:bg-[#2F3E34] transition font-semibold'
    //                 >
    //                   Home
    //                 </Link>

    //                 {user ? (
    //                   <>
    //                     <Link
    //                       to='/dashboard'
    //                       className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
    //                     >
    //                       Dashboard
    //                     </Link>
    //                     <div
    //                       onClick={logOut}
    //                       className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
    //                     >
    //                       Logout
    //                     </div>
    //                   </>
    //                 ) : (
    //                   <>
    //                     <Link
    //                       to='/login'
    //                       className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
    //                     >
    //                       Login
    //                     </Link>
    //                     <Link
    //                       to='/signup'
    //                       className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
    //                     >
    //                       Sign Up
    //                     </Link>
    //                   </>
    //                 )}
    //               </div>
    //             </div>
    //           )}
    //         </div>
    //       </div>
    //     </Container>
    //   </div>
    // </div>
    <nav className="fixed w-full bg-[#2F3E34] text-white z-10 shadow-sm p-4">
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/path-to-your-logo.png" alt="Planto Logo" className="w-8 h-8 mr-2" />
            <span className="font-bold text-lg">Planto.</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:text-gray-300 flex items-center"
              >
                Plant Types <span className="ml-1">&#x25BC;</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-md">
                  <Link to="/indoor" className="block px-4 py-2 hover:bg-gray-200">Indoor</Link>
                  <Link to="/outdoor" className="block px-4 py-2 hover:bg-gray-200">Outdoor</Link>
                </div>
              )}
            </div>
            <Link to="/more" className="hover:text-gray-300">More</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            <AiOutlineSearch className="w-6 h-6 hover:text-gray-300" />
            <AiOutlineShoppingCart className="w-6 h-6 hover:text-gray-300" />

            <div className="relative">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 border border-neutral-200 rounded-full cursor-pointer hover:shadow-md transition"
              >
                <AiOutlineMenu />
                <img
                  className="rounded-full w-8 h-8 ml-2"
                  referrerPolicy="no-referrer"
                  src={user && user.photoURL ? user.photoURL : avatarImg}
                  alt="profile"
                />
              </div>
              {isOpen && (
                <div className="absolute rounded-xl shadow-md w-40 bg-white overflow-hidden right-0 top-12 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    {user ? (
                      <>
                        <Link to="/dashboard" className="px-4 py-3 hover:bg-gray-200">Dashboard</Link>
                        <div onClick={logOut} className="px-4 py-3 hover:bg-gray-200 cursor-pointer">Logout</div>
                      </>
                    ) : (
                      <>
                        <Link to="/login" className="px-4 py-3 hover:bg-gray-200">Login</Link>
                        <Link to="/signup" className="px-4 py-3 hover:bg-gray-200">Sign Up</Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Home</Link>
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="block px-4 py-2 hover:bg-gray-200 flex justify-between items-center"
              >
                Plant Types <span>&#x25BC;</span>
              </button>
              {isDropdownOpen && (
                <div className="pl-4">
                  <Link to="/indoor" className="block px-4 py-2 hover:bg-gray-200">Indoor</Link>
                  <Link to="/outdoor" className="block px-4 py-2 hover:bg-gray-200">Outdoor</Link>
                </div>
              )}
            </div>
            <Link to="/more" className="block px-4 py-2 hover:bg-gray-200">More</Link>
            <Link to="/contact" className="block px-4 py-2 hover:bg-gray-200">Contact</Link>
          </div>
        )}
      </Container>
    </nav>
  )
}

export default Navbar
