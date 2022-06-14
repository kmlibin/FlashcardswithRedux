import { createSlice } from '@reduxjs/toolkit'


export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {topics:{}},
    reducers: {
        addTopic: (state, action) => {
            console.log(action.payload)
            const { id, name, icon } = action.payload;
            
            state.topics[id] ={
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
                console.log(state)
        },
        addQuizId: (state, action) => {
            const {topicId, id} = action.payload;
            state.topics[topicId].quizIds.push(id)
        }
    },
})


export const { addTopic, addQuizId } = topicsSlice.actions;
export const selectTopic = state => state.topics.topics
export const topicsReducer = topicsSlice.reducer

