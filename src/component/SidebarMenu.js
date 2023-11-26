
import { RxCross2 } from "react-icons/rx";
import { closeMenu } from "../store/HamburgerMenu";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SidebarMenu = () => {

    const IsMenuOpen = useSelector((store) => store.Menu.IsMenuOpen);
    const closeMenuHandler = () => {
        dispatch(closeMenu());
    };
    const dispatch = useDispatch();


    if (!IsMenuOpen) return null;

    return (
        <div className="w-[20rem]   bg-[#caf0f8] absolute left-0 top-0 mr-6  ">
            <RxCross2 onClick={() => closeMenuHandler()} className="text-[#003459] w-[2rem] h-[2rem] mt-2 ml-4  " />
            <ul className="text-[#003459] text-center py-[5rem]  font-bold space-y-2">

                <li>About Us</li>
                <li>Our Services</li>
                <li>Our Expertise</li>
                <li>
                    <Link to="/jobListing">Job Listing</Link></li>
                <li>Get In Touch</li>
            </ul>

        </div>
    );
}

export default SidebarMenu