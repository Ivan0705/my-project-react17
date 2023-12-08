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

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
    XL='center',
}

interface TextProps {
    className?: string;
    text?: string,
    title?: string,
    theme?: TextTheme | undefined,
    align?: string,
    size?: TextSize
}


export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.L
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
});
