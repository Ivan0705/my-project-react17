import {EntityState} from "@reduxjs/toolkit/dist/index";

export {Comment} from 'entites/Comment'

export interface ArticleDetailsCommentsSchema extends EntityState<Comment | any> {
    isLoading?: boolean;
    error?: string;
}
