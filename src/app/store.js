import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "../features/cards/cardSlice";
import { quizReducer } from "../features/quizzes/quizSlice";
import { topicsReducer } from '../features/topics/topicsSlice'

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizReducer,
    cards: cardReducer
  },
});
