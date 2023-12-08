import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "../../../../app/providers/StoreProvider";
import {Article} from "../../../../entites/Article";
import {Comment} from "../../../../entites/Comment";


export const fetchCommentsByArticleId = createAsyncThunk<Comment[],
    string | undefined,
    ThunkConfig<string> >(
    'articleDetailsComments/fetchCommentsByArticleId',
    async (articleId, thunkApi) => {
        const {extra, rejectWithValue} = thunkApi;

        if (!articleId) {
            return rejectWithValue('error');
        }

        try {
            // @ts-ignore
            const response = await extra.api.get<Article>(`/comments`, {
                params: {
                    articleId,
                    _expand: 'user'
                }
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
