import React from 'react'
import { Layouts } from './index'
import { AppSuspense } from 'app/components'
import useSettings from 'app/hooks/useSettings'

const AppLayout = (props) => {
    const { settings } = useSettings()
    const Layout = Layouts[settings.activeLayout]

    return (
        <AppSuspense>
            <Layout {...props} />
        </AppSuspense>
    )
}

export default AppLayout
