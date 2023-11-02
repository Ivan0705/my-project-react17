import * as React from "react";
import {useCallback} from "react";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import cls from './ProfilePageHeader.module.scss'
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {Text} from "../../../../shared/Text/Text";
import {Button, ButtonTheme} from "../../../../shared/ui/Button/Button";


import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getProfileReadonly, profileActions, updateProfileData} from "../../../../entites/Profile";

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {className} = props;

    const {t} = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();

    const onEdit: any = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch]);

    const onCancelEdit: any = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch]);

    const onSaveEdit: any = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch]);

    return (
        <div className={cls.ProfilePageHeader}>
            <Text title={t('Профиль')}/>
            {readonly ? (<Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                    {t('Редактировать')}
                </Button>) :
                (<>
                        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                            {t('Отменить')}
                        </Button>
                        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onSaveEdit}>
                            {t('Сохранить')}
                        </Button>
                    </>
                )}
            <div className={classNames(cls.ProfilePage, {}, [className])}>
            </div>
        </div>
    )
};
