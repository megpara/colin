import { useState } from "react";
import Modal from "../Modal";

export default function BottomLeft({ name, href }) {
    const [openModal, setOpenModal] = useState(false);
    const toggleModal = () => {
        setOpenModal(!openModal);
    };
    return (
        <div className="absolute w-full h-full top-0 left-0 title">
            <div className="absolute bottom-0 left-0 z-30 text-6xl">
                <button onClick={toggleModal} className="mb-8 ml-48">
                {name}
                </button>
            </div>
            <Modal open={openModal} toggle={toggleModal}/>
        </div>
    )
}
