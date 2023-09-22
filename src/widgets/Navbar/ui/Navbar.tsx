import * as React from "react";
import cls from './Navbar.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/AppLink/ui/AppLink";

interface NavBarProps {
    className?: string
}

export const Navbar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links, {}, [className])}>
                <AppLink to={'/'} className={cls.mainLink} children={'Главная'} theme={AppLinkTheme.SECONDARY}/>
                <AppLink to={'/about'} className={cls.mainLink} children={'О сайте'} theme={AppLinkTheme.RED}/>
            </div>
        </div>
    )
};
