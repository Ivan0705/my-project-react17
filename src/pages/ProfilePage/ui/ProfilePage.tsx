import * as React from "react";
import {
    DynamicModuleLoader,
    ReducersList
} from "../../../shared/config/components/DynamicModuleLoader/DynamicModuleLoader";
import {useTranslation} from "react-i18next";
import {classNames} from "../../../shared/lib/classNames/classNames";
import cls from './ProfilePage.module.scss'
import {profileReducer} from "entites/Profile";

const reducers: ReducersList = {
    profile: profileReducer,
};


interface ProfilePageProps {
    className?: string
}

export const ProfilePage = ({className}: ProfilePageProps) => {
    const {t} = useTranslation();
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                {t('PROFILE PAGE')}
            </div>
        </DynamicModuleLoader>
    )
};
