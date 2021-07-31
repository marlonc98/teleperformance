import React, { useContext } from 'react';
import {ModalContext} from '../../context/ModalContext';
import {translate, tDictionary} from '../../translate/translate';
import { Button, Modal as ModalBoostrap, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Modal() {
    const { modal, setModal } = useContext(ModalContext);
    if (modal == null) return <></>
    return <ModalBoostrap isOpen={modal != null} centered={true}>
        <ModalHeader>
            {modal.title}
        </ModalHeader>
        <ModalBody>
            {modal.content}
        </ModalBody>
        <ModalFooter>
            <div className="btn btnMainOutlined" onClick={() => setModal(null)}>{translate(tDictionary.close)}</div>
            {modal.button}
        </ModalFooter>
    </ModalBoostrap>
}

export default Modal;