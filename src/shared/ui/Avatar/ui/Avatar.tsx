import * as React from "react";
import {CSSProperties, useMemo} from "react";
import cls from './Avatar.module.scss'
import {classNames, Mods} from "../../../lib/classNames/classNames";

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = (props: AvatarProps) => {
    const {className, size, src, alt} = props;

    const mods: Mods = {};

    const stl = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100,
        }
    }, [size]);

    return (
        <img
            className={classNames(cls.Avatar, mods, [className])}
            src={src}
            style={stl}
            alt={alt}/>
    )
};
