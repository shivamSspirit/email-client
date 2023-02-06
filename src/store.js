import { configureStore } from '@reduxjs/toolkit'
import { emailReducer } from './reducers/emailreducer'

export const store = configureStore({
    reducer: {
        emails:emailReducer
    }
})