import '../fake-db'
import React from 'react'
import { Store } from './redux/Store'
import { Provider } from 'react-redux'
import AppContext from './contexts/AppContext'
import { Routes, Route, Navigate, useRoutes } from 'react-router-dom'
import { SettingsProvider } from 'app/contexts/SettingsContext'
import { Theme } from 'app/components'
import { AllPages } from './routes/routes'

const App = () => {
    const all_pages = useRoutes(AllPages())

    return (
        <AppContext.Provider>
            <Provider store={Store}>
                <SettingsProvider>
                    <Theme>
                        {all_pages}
                        <Routes>
                            <Route path='/' element={<Navigate to="/ecommerce" />} />
                        </Routes>
                    </Theme>
                </SettingsProvider>
            </Provider>
        </AppContext.Provider>
    )
}

export default App
