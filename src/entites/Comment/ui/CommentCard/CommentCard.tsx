import {classNames} from "../../../../shared/lib/classNames/classNames";
import cls from "./CommentCard.module.scss";
import * as React from "react";
import {memo} from "react";
import {Comment} from '../..'
import {Skeleton} from "../../../../shared/Skeleton/Skeleton";
import {Avatar} from "../../../../shared/ui/Avatar/ui/Avatar";
import {Text} from "../../../../shared/Text/Text";

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard,
                {},
                [className])
            }>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border='50%'/>
                    <Skeleton width={100} height={16} className={cls.usename}/>
                </div>
                <Skeleton className={cls.text} width={"100%"} height={50}/>
            </div>
        )
    }

    return (
        <div className={classNames(
            cls.CommentCard,
            {},
            [className])
        }
        >
            <div className={cls.header}>
                {
                    comment.user.avatar ?
                        <Avatar size={30} src={comment.user.avatar}/>
                        : null
                }
                <Text className={cls.usename} title={comment.user.username}/>
            </div>
            <Text className={cls.text} text={comment.text}/>
        </div>
    )
});
