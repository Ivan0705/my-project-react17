import * as React from "react";
import {memo} from "react";
import cls from './CommentList.module.scss'
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {CommentCard} from "../CommentCard/CommentCard";
import {Comment} from '../..';
import {Text} from "../../../../shared/Text/Text";

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading
    } = props;

    return (
        <div className={
            classNames(cls.CommentList,
                {},
                [className])
        }
        >
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard
                            key={comment.id}
                            isLoading={isLoading}
                            className={className}
                            comment={comment}
                        />
                    )
                    ) :
                    <Text text={('Комментарий отсутствуют')}/>
            }
        </div>
    )
});
