import * as React from "react";
import {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "../lib/classNames/classNames";
import cls from "../ThemeSwitcher/ui/ThemeSwitcher.module.scss";

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    toggleTheme?: () => void;
    theme?: ThemeButton,
    className?: string
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {className, children, theme, ...otherProps} = props;

    return (
        <button
            className={classNames(cls.className, {[cls[theme]]: true}, [className])}
            {...otherProps}>
            {children}
        </button>)
};
