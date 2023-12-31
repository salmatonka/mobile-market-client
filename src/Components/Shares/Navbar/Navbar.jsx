import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import TypeAnimation from '../TypeAnimation';
import { TypeAnimation as RawTypeAnimation } from 'react-type-animation';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-toastify';
const Navbar = () => {
  const { user, singOut} = useContext(AuthContext);
  // console.log(user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    singOut()
      .then(toast.warning('user logOut...!'))
      .catch(error => toast.error(error.message))
  }
  return (
    <div>
      {/* <div className='top-0 glass mx-auto fixed w-full z-40'>
        <div class="bg-gradient-to-tr to-purple-300 from-cyan-200 ">
          <div class=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <div class="relative flex items-center justify-between">
              <Link
                to="/"
                aria-label="Company"
                title="Company"
                class="inline-flex items-center"
              >
                <svg
                  class="w-8 text-teal-accent-400"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="currentColor"
                  fill="none"
                >
                  <rect x="3" y="1" width="7" height="12" />
                  <rect x="3" y="17" width="7" height="6" />
                  <rect x="14" y="1" width="7" height="6" />
                  <rect x="14" y="11" width="7" height="12" />
                </svg>
                <span class="ml-2 text-xl font-bold tracking-wide  uppercase">
                  mMarket.com
                </span>


              </Link>
              <ul class="flex items-center hidden space-x-8 lg:flex">

                <li>
                  <a
                    href="/products"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Products
                  </a>
                </li>


                {
                  user?.email ? (<>


                    <li>
                      <Link
                        to="/advertising"
                        class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Advertising"
                        title="Advertising"
                      >
                        Advertising
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/dashboard"
                        class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Dashboard"
                        title="Dashboard"
                      >
                        Dashboard
                      </Link>
                    </li>
                  </>) : (<>
                    <li>
                      <Link
                        to="/login"
                        class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        Login
                      </Link>
                    </li>
                  </>)
                }
                <li>
                  <Link
                    to="/blog"
                    aria-label="Blog"
                    title="Blog"
                    class="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    aria-label="about us"
                    title="about us"
                    class="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    About us
                  </Link>
                </li>
              </ul>
              <ul class="flex items-center hidden space-x-8 lg:flex">
                <li>
                  <Link
                    to="/dashboard"
                    class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Dashboard"
                    title="Dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
              <ul class="flex items-center hidden space-x-8 lg:flex">
                <li>
                  <Link
                    to="/login"
                    class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Login
                  </Link>
                </li>
              </ul>
              <div class="lg:hidden">
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                </button>
                {isMenuOpen && (
                  <div class="absolute top-0 left-0 w-full">
                    <div class="p-5  border rounded shadow-sm">
                      <div class="flex items-center justify-between mb-4">
                        <div>
                          <Link
                            to="/"
                            aria-label="Company"
                            title="Company"
                            class="inline-flex items-center"
                          >
                            <svg
                              class="w-8 text-deep-purple-accent-400"
                              viewBox="0 0 24 24"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeMiterlimit="10"
                              stroke="currentColor"
                              fill="none"
                            >
                              <rect x="3" y="1" width="7" height="12" />
                              <rect x="3" y="17" width="7" height="6" />
                              <rect x="14" y="1" width="7" height="6" />
                              <rect x="14" y="11" width="7" height="12" />
                            </svg>
                            <span class="ml-2 text-xl font-bold tracking-wide  uppercase">
                              mMarket.com
                            </span>

                          </Link>
                        </div>
                        <div>
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <nav>
                        <ul class="space-y-4">
                          <li>
                            <Link
                              to="/"
                              aria-label="Our product"
                              title="Our product"
                              class="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Home
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products"
                              aria-label="Our product"
                              title="Our product"
                              class="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Products
                            </Link>
                          </li>





                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div >
        </div >
      </div > */}





      <div className="navbar bg-gradient-to-tr to-purple-300 from-cyan-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link>Item 1</Link></li>

              <li><Link>Item 3</Link></li>
            </ul>
          </div>
          <Link to='/' class="ml-2 text-xl font-bold tracking-wide  uppercase"> mMarket.com</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            <li>
              <Link
                to="/"
                aria-label="Our product"
                title="Our product"
                class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                aria-label="Blog"
                title="Blog"
                class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                aria-label="about"
                title="about"
                class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                About us
              </Link>
            </li>


            {
              user?.uid ? (<>
                <li>
                  <Link
                    to="/dashboard"
                    class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Dashboard"
                    title="Dashboard"
                  >
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link
                    to="/advertising"
                    class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Advertising"
                    title="Advertising"
                  >
                    Advertising
                  </Link>
                </li>

                <li>
                  <button
                    onClick={handleLogOut}

                    class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    LogOut
                  </button>
                </li>
              </>)
                :
                (<>
                  <li>
                    <Link
                      to="/login"
                      class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      aria-label="Sign up"
                      title="Sign up"
                    >
                      Login
                    </Link>
                  </li>
                </>)
            }
            
          </ul>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;