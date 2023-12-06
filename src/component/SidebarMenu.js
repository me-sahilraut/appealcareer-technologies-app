
import { RxCross2 } from "react-icons/rx";
import { closeMenu } from "../store/HamburgerMenu";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import list from "../mockData/list.json";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
const SidebarMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const IsMenuOpen = useSelector((store) => store.Menu.IsMenuOpen);
    const closeMenuHandler = () => {
        dispatch(closeMenu());
    };
    const dispatch = useDispatch();




    if (!IsMenuOpen) return null;

    return (
        <div className="w-[20rem]   bg-white absolute left-0 top-0 mr-6  ">
            <RxCross2 onClick={() => closeMenuHandler()} className="text-black w-[2rem] h-[2rem] mt-2 ml-4  " />
            <ul className="text-black text-left py-[5rem]  font-bold space-y-2">
                <div className="flex">
                    <li className="relative  cursor-pointer ">

                        <Link to="/" id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="" onClick={() => setIsOpen((prev) => !prev)}>
                            <span className="flex px-6 text-lg  font-bold uppercase hover:text"> About us
                                {isOpen ?
                                    <IoMdArrowDropup className="my-1 w-5 h-5" />

                                    :
                                    <IoMdArrowDropdown className="my-1 w-5 h-5" />
                                }

                            </span>


                            {isOpen && (

                                <div className="bg-gray-200  top-[1rem]  flex flex-col items-start  p-1 w-full">
                                    {list.map((item, i) => (
                                        <div
                                            className="flex w-full justify-between hover:bg-pink-50 cursor-pointer rounded-r-lg border-l-transparent"
                                            key={i}
                                        >
                                            <div className='text-left text-black my-2 mx-[1rem]'>
                                                <h3 className=' text-lg  font-bold uppercase' onClick={() => closeMenuHandler()}><Link to={item.link}>{item.title}</Link ></h3>

                                            </div>
                                        </div>
                                    ))}
                                </div>

                            )}
                        </Link>


                    </li>

                </div>
                <li className="hover:underline hover:underline-offset-8 cursor-pointer px-6 text-lg  font-bold uppercase">Our Services</li>
                <li className="hover:underline hover:underline-offset-8 cursor-pointer px-6 text-lg  uppercase font-bold">Our Expertise</li>
                <li className="hover:underline hover:underline-offset-8 cursor-pointer px-6 text-lg  font-semibold">
                    <Link to="/jobListing " className="uppercase font-bold">Job Listing</Link></li>
                <li className="hover:underline hover:underline-offset-8 cursor-pointer px-6 text-lg   uppercase font-bold">Get In Touch</li>
            </ul>

        </div >
    );
}

export default SidebarMenu