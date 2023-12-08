import * as React from "react";
import {memo} from "react";
import {classNames} from "../../lib/classNames/classNames";
import cls from './Icon.module.scss'

interface IconProps {
    className?: string
    Svg?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
    const {className, Svg} = props;

    return (    // @ts-ignore
        <Svg className={
            classNames(cls.Icon,
                {},
                [className])
        }/>
    )
});

