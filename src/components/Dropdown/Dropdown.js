import { useState } from "react";

import './style-dropdown.css'

export default function Dropdown() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleMenuOne = () => {
        // do something
        setOpen(false);
    };

    const handleMenuTwo = () => {
        // do something
        setOpen(false);
    };
    return (
        <>
            <div className="dropdown">
                <button onClick={handleOpen}>Dropdown</button>
                {open ? (
                    <ul className="menu">
                        <li className="menu-item">
                            <button onClick={handleMenuOne}>Menu 1</button>
                        </li>
                        <li className="menu-item">
                            <button onClick={handleMenuTwo}>Menu 2</button>
                        </li>
                    </ul>
                ) : null}
            </div>
        </>
    )
}