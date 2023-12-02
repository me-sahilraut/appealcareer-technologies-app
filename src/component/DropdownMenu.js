import React from 'react'
import { useSelector } from "react-redux";
const DropdownMenu = () => {

    const IsMenuOpen = useSelector((store) => store.Menu.IsMenuOpen);

    if (!IsMenuOpen) return null;
    return (
        <div>
            {console.log("we got it!")}
        </div>
    )
}

export default DropdownMenu