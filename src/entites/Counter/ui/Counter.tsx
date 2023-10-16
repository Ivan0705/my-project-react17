import * as React from "react";
import {Button, ButtonTheme} from "../../../shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../model/slice/counterSlice";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";
import {useTranslation} from "react-i18next";


export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const {t} = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment())
    };

    const decrement = () => {
        dispatch(counterActions.decrement())
    };

    return (
        <div>
            <h1 data-testid="value-title">value={counterValue}</h1>
            <Button data-testid="increment-btn" onClick={increment}
                    theme={ButtonTheme.BACKGROUND_INVERTED}>{t('Прибавить')}</Button>
            <Button data-testid="decrement-btn" onClick={decrement}
                    theme={ButtonTheme.BACKGROUND_INVERTED}>{t('Убавить')}</Button>
        </div>)


};
