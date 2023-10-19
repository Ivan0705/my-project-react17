import * as React from "react";
import {memo, useCallback} from "react";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "../../../../shared/ui/Button/Button";
import {Input} from "../../../../shared/Input/ui/Input";
import {Text, TextTheme} from "../../../../shared/Text/Text"
import {useDispatch, useSelector} from "react-redux";
import {loginActions} from "features/AuthByUsername/model/slice/loginSlice";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {username, password, error, isLoading} = useSelector(getLoginState);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        // @ts-ignore
        dispatch(loginByUsername({username, password}));
    }, [dispatch, username, password]);

    return (

        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')}/>
            {error && <Text title={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR}/>}
            <Input
                autoFocus type={'text'}
                className={cls.input}
                placeholder={t('Введите username')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type={'password'}
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >{t('Войти')}</Button>
        </div>
    )
});
