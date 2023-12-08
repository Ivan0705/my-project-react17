import {ArticleCodeBlock} from "../../model/types/article";
import * as React from "react";
import {memo} from "react";
import {useTranslation} from "react-i18next";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import cls from "./ArticleCodeBockComponent.module.scss"
import {Code} from "../../../../shared/ui/Code/Code";

interface ArticleCodeBockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBockComponent = memo((props: ArticleCodeBockComponentProps) => {
    const {className, block} = props;

    return (
        <div className={classNames(
            cls.ArticleCodeBockComponent,
            {},
            [className])}>
            <Code text={block.code}/>
        </div>
    )
});
