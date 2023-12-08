import * as React from "react";
import {classNames, Mods} from "../../shared/lib/classNames/classNames";
import cls from './Test.module.scss'

interface TestProps {
    className?: string
}

export const Test = (props: TestProps) => {
    const {className} = props;

    const mods: Mods = {};

    return (
        <div className={classNames(cls.Test, mods, [className])}>
            Hello test!
        </div>
    )
};
