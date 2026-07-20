import {configureStore} from '@reduxjs/toolkit'
import authREducer from '../features/auth/state/auth/authSlice'

export const store = configureStore({
    reducer:{
        auth:authREducer
    },
})