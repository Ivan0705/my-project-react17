import * as React from "react";
import {memo} from "react";
import {AppLink, AppLinkTheme} from "../../../../shared/AppLink/ui/AppLink";
import cls from "./SiderBarItem.module.scss";
import {useTranslation} from "react-i18next";
import {SiderBaritemType} from "../../model/item";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {useSelector} from "react-redux";
import {getUserAuthData} from "../../../../entites/User";

interface SiderBarItemProps {
    item: SiderBaritemType;
    collapsed?: boolean;
    authOnly?: boolean;
}

export const SiderBarItem = memo(({item, collapsed}: SiderBarItemProps) => {
    const {t} = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink to={item.path}
                 className={classNames(cls.item, {[cls.collapsed]: collapsed})}
                 theme={AppLinkTheme.SECONDARY}>
            <item.Icon className={cls.icon}/>
            <span className={cls.link}>
                        {t(item.text)}
                    </span>
        </AppLink>
    )
});
