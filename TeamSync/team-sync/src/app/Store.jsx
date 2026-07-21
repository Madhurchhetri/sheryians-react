import {configureStore} from '@reduxjs/toolkit'
import authREducer from '../features/auth/state/auth/authSlice'
import themeReducer from '../shared/state/ThemeSlice'

export const store = configureStore({
    reducer:{
        auth:authREducer,
        theme : themeReducer
    },
})