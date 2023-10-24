import * as React from "react";
import {memo, useCallback} from "react";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss'
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "../../../../shared/ui/Button/Button";
import {Input} from "../../../../shared/Input/ui/Input";
import {Text, TextTheme} from "../../../../shared/Text/Text"
import {useDispatch, useSelector} from "react-redux";
import {loginActions, loginReducer} from "features/AuthByUsername/model/slice/loginSlice";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import {getLoginUsername} from "../../model/selectors/getLoginUsername/getLoginUsername";
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword";
import {getLoginError} from "../../model/selectors/getLoginError/getLoginError";
import {getLoginIsLoading} from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import {
    DynamicModuleLoader,
    ReducersList
} from "../../../../shared/config/components/DynamicModuleLoader/DynamicModuleLoader";


export interface LoginFormProps {
    className?: string,
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
};

export const LoginForm = memo(({className, onSuccess}: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        // @ts-ignore
        const result = await dispatch(loginByUsername({username, password}));

        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, username, password]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount={true}
            reducers={initialReducers}>
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
        </DynamicModuleLoader>
    )
});
