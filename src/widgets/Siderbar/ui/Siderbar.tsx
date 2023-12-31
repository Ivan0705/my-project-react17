import * as React from "react";
import {useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Siderbar.module.scss'
import {ThemeSwitcher} from "../../../shared/ThemeSwitcher";
import {LangSwitcher} from "../../../shared/LangSwitcher/LangSwitcher";
import {Button} from "../../../shared/ui/Button/Button";

interface SiderbarProps {
    className?: string
}

export const Siderbar = ({className}: SiderbarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="siderbar"
            className={classNames(cls.Siderbar, {[cls.collapsed]: collapsed}, [className])}>
            <Button
                data-testid='siderbar-toggle'
                onClick={onToggle}>
                toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    )
};
