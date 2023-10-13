import * as React from "react";
import {useCallback, useState} from "react";
import cls from './Navbar.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {Modal} from "../../../shared/Modal/Modal";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "../../../shared/ui/Button/Button";


interface NavBarProps {
    className?: string
}

export const Navbar = ({className}: NavBarProps) => {
    const [t] = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                1212
            </Modal>
        </div>
    )
};
