import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'
const AppLayout = () => {
    return (
        <Provider store={store}>
            < Navbar />
            <main>
                <Outlet />
            </main>
        </Provider>
    )
}

export default AppLayout