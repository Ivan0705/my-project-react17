import * as React from "react";
import {memo} from "react";
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './ArticleDetailsPage.module.scss'
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import {ArticleDetails} from "entites/Article";
import {Text} from "../../../../shared/Text/Text";
import {CommentList} from "../../../../entites/Comment";
import {
    DynamicModuleLoader,
    ReducersList
} from "../../../../shared/config/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    articleDetailsCommentSliceReducer,
    getArticleComments
} from "pages/ArticleDetailsPage/model/slices/articleDetailsCommentSlice";
import {useDispatch, useSelector} from "react-redux";
import {getArticleCommentsError, getArticleCommentsIsLoading} from "../../model/selectors/comments";
import {useinItialEffect} from "../../../../shared/lib/hooks/useinItialEffect/useinItialEffect";
import {fetchCommentsByArticleId} from "../../model/services/fetchCommentsByArticleId";

interface ArticleDetailsPageProps {
    className?: string;
}

export const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const {className} = props;

    const {t} = useTranslation('article-details');

    const {id} = useParams<{ id: string }>();

    const mods: Mods = {};

    const reducers: ReducersList = {
        articleDetailsComments: articleDetailsCommentSliceReducer
    };

    const comments = useSelector(getArticleComments.selectAll);

    const commentsError = useSelector(getArticleCommentsError);

    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const dispatch = useDispatch();

    useinItialEffect(() => {
        // @ts-ignore
        dispatch(fetchCommentsByArticleId(id))
    });

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, mods, [className])}>
                {t('Статья не найдена')}
            </div>
        )
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, mods, [className])}>
                <ArticleDetails id={id}/>
                <Text className={cls.commentTitle} title={t('Комментарии')}/>
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    )
});
