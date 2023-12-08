import * as React from "react";
import {CSSProperties, memo} from "react";
import {classNames, Mods} from "../lib/classNames/classNames";
import cls from './Skeleton.module.scss'

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        height,
        width,
        border
    } = props;

    const mods: Mods = {};

    const styles: CSSProperties = {
        height,
        width,
        borderRadius: border
    };

    return (
        <div className={
            classNames(
                cls.Skeleton,
                mods,
                [className]
            )
        }
             style={styles}
        />
    )
});
