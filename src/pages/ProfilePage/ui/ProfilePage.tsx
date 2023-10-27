import * as React from "react";
import {useEffect} from "react";
import {
    DynamicModuleLoader,
    ReducersList
} from "../../../shared/config/components/DynamicModuleLoader/DynamicModuleLoader";
import {classNames} from "../../../shared/lib/classNames/classNames";
import cls from './ProfilePage.module.scss'
import {fetchProfileData, ProfileCard, profileReducer} from "entites/Profile";
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";

const reducers: ReducersList = {
    profile: profileReducer,
};


interface ProfilePageProps {
    className?: string
}

export const ProfilePage = ({className}: ProfilePageProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    )
};
