import * as React from "react";
import {useMemo, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Siderbar.module.scss'

import {ThemeSwitcher} from "../../../shared/ThemeSwitcher";
import {LangSwitcher} from "../../../shared/LangSwitcher/LangSwitcher";
import {Button, ButtonSize, ButtonTheme} from "../../../shared/ui/Button/Button";
import {SiderBaritemList} from "../model/item";
import {SiderBarItem} from "./SiderBarItem/SiderBarItem";


interface SiderbarProps {
    className?: string
}

export const Siderbar = ({className}: SiderbarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    const itemsList = useMemo(() => {
        return SiderBaritemList.map((item, key) =>
            <div key={key}>
                <SiderBarItem item={item}/>
            </div>
        )
    }, [collapsed]);
    return (
        <div
            data-testid="siderbar"
            className={classNames(cls.Siderbar, {[cls.collapsed]: collapsed}, [className])}>
            <div className={cls.items}>
                {itemsList}
            </div>
            <Button
                data-testid="siderbar-toggle"
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.collapseBtn}
                square
                size={ButtonSize.XL}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} className={cls.lang}/>
            </div>
        </div>
    )
};
