import * as React from "react";
import {useCallback, useState} from "react";
import cls from './Navbar.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "../../../shared/ui/Button/Button";
import {LoginModal} from "../../../features/AuthByUsername";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "../../../entites/User";


interface NavBarProps {
    className?: string
}

export const Navbar = ({className}: NavBarProps) => {
    const [t] = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (<div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.links}
                onClick={onLogout}
            >
                {t('Выйти')}
            </Button>
        </div>);
    }
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
        </div>
    )
};
