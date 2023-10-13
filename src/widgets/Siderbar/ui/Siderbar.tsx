import * as React from "react";
import {useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Siderbar.module.scss'

import {ThemeSwitcher} from "../../../shared/ThemeSwitcher";
import {LangSwitcher} from "../../../shared/LangSwitcher/LangSwitcher";
import {Button, ButtonSize, ButtonTheme} from "../../../shared/ui/Button/Button";
import {AppLink, AppLinkTheme} from "../../../shared/AppLink/ui/AppLink";
import {RoutePath} from "../../../shared/config/routeConfig/routeConfig";
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import {useTranslation} from "react-i18next";


interface SiderbarProps {
    className?: string
}

export const Siderbar = ({className}: SiderbarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="siderbar"
            className={classNames(cls.Siderbar, {[cls.collapsed]: collapsed}, [className])}>
            <div className={cls.items}>
                <AppLink to={RoutePath.main}
                         theme={AppLinkTheme.SECONDARY} className={cls.item}>
                    <MainIcon className={cls.icon}/>
                    <span className={cls.link}>
                        {t('Главная страница')}
                    </span>
                </AppLink>

                <AppLink to={RoutePath.about}
                         className={cls.item}
                         theme={AppLinkTheme.SECONDARY}>
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>

            </div>
            <Button
                data-testid="siderbar-toggle"
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.collapseBtn}
                square
                size={ButtonSize.XL}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} className={cls.lang}/>
            </div>
        </div>
    )
};
