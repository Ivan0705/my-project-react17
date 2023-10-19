import * as React from "react";
import {Modal} from "../../../../shared/Modal/Modal";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import cls from './LoginModal.module.scss'
import {LoginForm} from "../..";

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose: () => void;
}

export const LoginModal = ({className, isOpen, onClose}: LoginModalProps) => {
    return (
        <Modal className={classNames(cls.LoginModal, {}, [className])}
               isOpen={isOpen}
               onClose={onClose}
               lazy
        >
            <LoginForm/>
        </Modal>
    )
};
