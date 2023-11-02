import * as React from "react";
import {memo, useCallback} from "react";
import {Country} from "../..";
import {useTranslation} from "react-i18next";
import {Select} from "../../../../shared/ui/Select/Select";

interface CountrySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    {value: Country.FRANCE, content: Country.FRANCE},
    {value: Country.RUSSIA, content: Country.RUSSIA},
    {value: Country.USA, content: Country.USA}

];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly
    } = props;

    const {t} = useTranslation();

    const onChangeHandler: any = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange]);

    return (
        <Select
            className={className}
            value={value}
            label={t('Укажите страну')}
            options={options}
            onChange={onChangeHandler}
            readonly={readonly}
        />

    )

});
