import * as React from "react";
import {Suspense} from "react";
import {Modal} from "../../../../shared/Modal/Modal";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import cls from './LoginModal.module.scss'
import {LoginFormAsync} from "../LoginForm/LoginForm.async";
import {Loader} from "../../../../shared/Loader/Loader";

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
            <Suspense fallback={<Loader/>}>
                <LoginFormAsync onSuccess={onClose}/>
            </Suspense>
        </Modal>
    )
};
