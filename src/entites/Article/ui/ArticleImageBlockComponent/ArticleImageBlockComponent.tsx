import * as React from "react";
import {memo} from "react";
import cls from './ArticleImageBlockComponent.module.scss'
import {Text, TextAlign} from "../../../../shared/Text/Text";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {ArticleImageBlock} from "../../model/types/article";

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
        const {className, block} = props;
        return (
            <div className={classNames(
                cls.ArticleImageBlockComponent,
                {},
                [className])}>
                <img src={block.src} alt={block.title} className={cls.image}/>
                {block.title && (
                    <Text
                        title={block.title}
                        align={TextAlign.CENTER}
                    />
                )}
            </div>
        )
    })
;
