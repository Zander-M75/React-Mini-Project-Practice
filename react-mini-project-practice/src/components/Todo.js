import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (<div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
            <span>A Span</span>
            <button className="btn" onClick={deleteHandler}>DELETE</button>
        </div>
        {/* {modalIsOpen && <Modal />} */}
        {modalIsOpen ? <Modal /> : null}
        {modalIsOpen ? <Backdrop onClick={closeModalHandler} /> : null}
    </div>
    );
}

export default Todo;