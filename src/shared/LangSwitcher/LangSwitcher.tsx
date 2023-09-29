import {useTranslation} from "react-i18next";
import * as React from "react";
import {Button, ThemeButton} from "../ui/Button/Button";
import cls from './LangSwitcher.module.scss'
import {classNames} from "../lib/classNames/classNames";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    };

    return (
        <div className={classNames(cls.LangSwitcher, {}, [className])}>
            <Button theme={ThemeButton.CLEAR} onClick={toggle}>{t('Перевод')}</Button>
            {t('Язык')}
        </div>
    )
};
