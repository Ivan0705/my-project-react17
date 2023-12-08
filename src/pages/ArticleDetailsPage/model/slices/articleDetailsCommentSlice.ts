import {AnyAction, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {fetchCommentsByArticleId} from "../services/fetchCommentsByArticleId";
import {Comment} from "entites/Comment";
import {StateSchema} from "../../../../app/providers/StoreProvider";

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id
});


export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments
        || commentsAdapter.getInitialState(),
);


const articleDetailsCommentSlice = createSlice({
    name: 'articleDetailsCommentSlice',
    initialState: commentsAdapter.getInitialState({
        isLoading: false,
        error: undefined,
        ids: ['1', '2'],
        entities: {
            '1': {
                id: '1',
                text: 'Comment1',
                user: {
                    id: '1',
                    username: 'Ivan',
                    avatar: ''
                }
            },
            '2': {
                id: '2',
                text: 'Comment2',
                user: {
                    id: '2',
                    username: 'John_Cherry',
                    avatar: ''
                }
            }
        },
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCommentsByArticleId.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action: AnyAction) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const {reducer: articleDetailsCommentSliceReducer} = articleDetailsCommentSlice;
