import * as React from "react";
import {useCallback, useEffect} from "react";
import {
    DynamicModuleLoader,
    ReducersList
} from "../../../shared/config/components/DynamicModuleLoader/DynamicModuleLoader";
import {classNames} from "../../../shared/lib/classNames/classNames";
import cls from './ProfilePage.module.scss'
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer
} from "entites/Profile";

import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {ProfilePageHeader} from "./ProfilePageHeader/ProfilePageHeader";
import {Currency} from "../../../entites/Currency";
import {Country} from "entites/Country";
import {Text, TextTheme} from "../../../shared/Text/Text";
import {ValidateProfileError} from "../../../entites/Profile/model/types/profile";
import {useTranslation} from "react-i18next";


const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

export const ProfilePage = ({className}: ProfilePageProps) => {
    const dispatch = useAppDispatch();

    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const profileForm = useSelector(getProfileForm);
    const validateErrors = useSelector(getProfileValidateErrors);
    const {t} = useTranslation();

    const validateErrorTranslate = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    };

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch]);

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({first: value || ''}))
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({lastname: value || ''}))
    }, [dispatch]);

    const onChangeAge = useCallback((value?: number | string) => {
        dispatch(profileActions.updateProfile({age: Number(value || 0)}))
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({city: value || ''}))
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({username: value || ''}))
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({avatar: value || ''}))
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({currency}))
    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({country}))
    }, [dispatch]);


    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfilePageHeader/>
                {validateErrors?.length && validateErrors?.map(err =>
                    <Text
                        key={err}
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslate[err]}/>
                )}
                <ProfileCard
                    data={profileForm}
                    error={error}
                    isLoading={isLoading}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </DynamicModuleLoader>
    )
};
