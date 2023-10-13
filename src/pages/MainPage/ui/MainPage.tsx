import * as React from "react";
import {useTranslation} from "react-i18next";
import {Counter} from "../../../entites";

export const MainPage = () => {
    const {t} = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
            <Counter/>
        </div>
    )
};
