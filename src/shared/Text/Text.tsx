import * as React from "react";
import {memo} from "react";
import {classNames, Mods} from "../lib/classNames/classNames";
import cls from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    CENTER = "center",
    RIGHT = "right",
    LEFT = "left"
}

interface TextProps {
    className?: string;
    text?: string,
    title?: string,
    theme?: TextTheme | undefined,
    align?: string
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
});
