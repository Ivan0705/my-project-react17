import * as React from "react";
import {memo} from "react";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import cls from './ArticleTextBlockComponent.module.scss'
import {ArticleTextBlock} from "../../model/types/article";
import {Text} from "../../../../shared/Text/Text";

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const {className, block} = props;
    return (
        <div className={classNames(
            cls.ArticleTextBlockComponent,
            {},
            [className])}>
            {
                block.title && (
                    <Text
                        title={block.title}
                        className={cls.title}
                    />
                )
            }
            {block.paragraphs.map((p, index) =>
                (
                    <Text key={index} text={p} className={cls.paragraph}/>
                ))}
        </div>
    )
});