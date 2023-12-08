import * as React from "react";
import {memo} from "react";
import cls from './ArticlesPage.module.scss'
import {useTranslation} from "react-i18next";
import {classNames, Mods} from "../../../../shared/lib/classNames/classNames";

interface ArticlesPageProps {
    className?: string;
}

export const ArticlesPage = memo((props: ArticlesPageProps) => {
    const {className} = props;

    const mods: Mods = {};

    return (
        <div className={
            classNames(
                cls.ArticlesPage,
                mods,
                [className]
            )
        }>
            ArticlesPage
        </div>
    )
});
