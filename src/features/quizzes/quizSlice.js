import { createSlice } from '@reduxjs/toolkit'

import { addQuizId } from'../topics/topicsSlice'


export const quizSlice = createSlice({
    name: 'quizzes',
    initialState: {quizzes:{}},
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds} = action.payload;
            //console.log(action.payload)
            state.quizzes[id] ={
                id: id,
                name: name,
                topicId: topicId,
                cardIds: cardIds,
            }
        }
        }
    }
);

export const addQuizThunk = payload => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizId({topicId: payload.topicId, id: payload.id}));
    }

}

export const { addQuiz } = quizSlice.actions;
export const selectQuiz = state => state.quizzes.quizzes;
export const quizReducer = quizSlice.reducer

