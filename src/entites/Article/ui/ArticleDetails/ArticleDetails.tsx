import * as React from "react";
import {memo, useCallback, useEffect} from "react";
import cls from './ArticleDetails.module.scss'
import {DynamicModuleLoader, ReducersList} from "shared/config/components/DynamicModuleLoader/DynamicModuleLoader";
import {articleDetailsReducer} from "entites/Article/model/slice/articleDetailsSlice";
import {useTranslation} from "react-i18next";
import {fetchArticleById} from "../../model/services/fetchArticleById/fetchArticleById";
import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from "../../model/selectors/ArticleDetails";
import {ArticleBlock, ArticleBlockType} from "../../model/types/article";
import {Text, TextAlign, TextSize} from "../../../../shared/Text/Text";
import {Skeleton} from "../../../../shared/Skeleton/Skeleton";
import {Avatar} from "../../../../shared/ui/Avatar/ui/Avatar";
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import {Icon} from "../../../../shared/ui/Icon/Icon";
import {ArticleCodeBockComponent} from "../ArticleCodeBockComponent/ArticleCodeBockComponent";
import {ArticleImageBlockComponent} from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import {ArticleTextBlockComponent} from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import {classNames} from "../../../../shared/lib/classNames/classNames";

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,

};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {

    const {className, id} = props;

    const {t} = useTranslation();

    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);

    const error = useSelector(getArticleDetailsError);

    const article = useSelector(getArticleDetailsData);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);


    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBockComponent
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        key={block.id}
                        block={block}
                        className={cls.block}/>);
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                );
            default:
                return null
        }
    }, []);

    let content;
    if (isLoading) {
        content = (
            <React.Fragment>
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'}/>
                <Skeleton className={cls.title} width={300} height={32}/>
                <Skeleton className={cls.skeleton} width={600} height={24}/>
                <Skeleton className={cls.skeleton} width='100%' height={200}/>
                <Skeleton className={cls.skeleton} width='100%' height={200}/>
            </React.Fragment>
        )
    } else if (error) {
        content = (
            <React.Fragment>
                <Text
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке')}
                />
            </React.Fragment>
        )
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}/>
                </div>
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon}/>
                    <Text
                        text={String(article?.views)}
                    />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon}/>
                    <Text
                        text={article?.createdAt}
                    />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        )
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(
                cls.ArticleDetails,
                {},
                [className])}
            >
                {content}
            </div>
        </DynamicModuleLoader>
    )
});
