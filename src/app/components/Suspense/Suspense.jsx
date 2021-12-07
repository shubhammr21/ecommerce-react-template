import React, { Suspense } from 'react'
import { Loading } from 'app/components'

const AppSuspense = ({ children }) => {
    return <Suspense fallback={<Loading />}>{children}</Suspense>
}

export default AppSuspense
