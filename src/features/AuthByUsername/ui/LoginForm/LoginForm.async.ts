import {FC, lazy} from "react";
import {LoginFormProps} from "./LoginForm";


export const LoginFormAsync = lazy < FC<LoginFormProps>>(() => new Promise(res => {
        setTimeout(() => {// @ts-ignore
            res(import('./LoginForm').then(({LoginForm}) => ({default: LoginForm})))
        }, 1500)
    })
);
