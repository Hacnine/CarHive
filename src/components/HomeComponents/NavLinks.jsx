import "../../views/customcss.css";

import { navLinks2 } from '../../constants'
import { Link, NavLink } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AppContext, useGlobalContext } from '../../Context';

const NavLinks = () => {
  const {signInBtn, setSignInBtn,activeLink, setActiveLink } = useGlobalContext(AppContext);

  function changeColor(){
    setActiveLink(3);
  }

  function signIn(){
    setSignInBtn(true)
  }

  function signUp(){

    setSignInBtn(false)
  }

 
  // onClick={() => 
  //   {setActiveLink(index)
  //   console.log(activeLink)}}

  return (
    <div>
        <div className="hidden lg:block mx-auto w-[697px]">
            <div className="flex items-center justify-between font-open">
              {navLinks2.map((section, key) => (
                <div
                  className="relative flex justify-between items-center gap-1 rounded group"
                  key={key}
                >
                  {/* <NavLink className={ 'active:text-primary-green'} to={section.link}>{section.title}</NavLink> */}

                  <NavLink  to={section.link} className=" hover:text-primary-green border-b-2 border-transparent hover:border-primary-green transition-all duration-150 ease-in cursor-pointer" >{section.title}</NavLink>
                  <p className=""></p>
                  {section.title !== "Home" && section.title !== "Booking" && section.title !== "News"  && section.title !== "Cars" ? (
                    <>
                      <IoMdArrowDropdown />
                      <div className="absolute hidden group-hover:block top-full min-w-full w-max bg-white-green shadow-md mt-1 rounded z-50">
                        <ul className="text-left border rounded">
                          {section.links.map((item, index) => (
                            <li
                            className="px-4 py-1 text-sm text-gray-600 font-medium hover:bg-deep-green hover:text-white-green border-b"
                            key={index}
                          >
                              {item.title === 'Sign Up'? 
                              
                              <Link to={item.link} onClick={signUp}>{item.name}</Link>
                            : item.name === 'Dashboard' || item.name === 'Rental' || item.name === 'Profile' || item.name === 'Orders' || item.name === 'Favorites'?  
                            <Link to={item.link} onClick={()=>(setActiveLink(index))}>{item.name}</Link>:
                            <Link to={item.link}>{item.name}</Link>
                              
                              }
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>
          </div>
    </div>
  )
}

export default NavLinks
