import * as React from "react";
import {ButtonHTMLAttributes, memo, ReactNode} from "react";
import {classNames} from "../../lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    S = 'size_s',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    toggleTheme?: () => void;
    theme?: ButtonTheme,
    className?: string,
    square?: boolean,
    size?: ButtonSize,
    disabled?: boolean,
    children: ReactNode
}


export const Button = memo<ButtonProps>((props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        square,
        disabled,
        size = ButtonSize.M, ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled
    };

    return (
        <button
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}>
            {children}
        </button>)
});
