
import { RxCross2 } from "react-icons/rx";
import { closeMenu } from "../store/HamburgerMenu";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import list from "../mockData/list.json";


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

                <li className="relative hover:underline hover:underline-offset-8 cursor-pointer">
                    <Link to="/" id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="px-6 text-lg  font-semibold hover:text" onClick={() => setIsOpen((prev) => !prev)}>
                        About us


                        {isOpen && (
                            <div className="bg-[#caf0f8] absolute top-[3rem]  flex flex-col items-start rounded-lg p-2 w-full">
                                {list.map((item, i) => (
                                    <div
                                        className="flex w-full justify-between hover:bg-pink-50 cursor-pointer rounded-r-lg border-l-transparent"
                                        key={i}
                                    >
                                        <div className='text-left text-[#003459] my-5'>
                                            <h3 className='font-bold'><Link to={item.link}>{item.title}</Link ></h3>
                                            <p className='font-extralight'>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Link>

                </li>
                <li className="hover:underline hover:underline-offset-8 cursor-pointer px-6 text-lg  font-semibold">Our Services</li>
                <li className="hover:underline hover:underline-offset-8 cursor-pointer px-6 text-lg  font-semibold">Our Expertise</li>
                <li className="hover:underline hover:underline-offset-8 cursor-pointer px-6 text-lg  font-semibold">
                    <Link to="/jobListing">Job Listing</Link></li>
                <li className="hover:underline hover:underline-offset-8 cursor-pointer px-6 text-lg  font-semibold">Get In Touch</li>
            </ul>

        </div>
    );
}

export default SidebarMenu