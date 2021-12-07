import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const AppEcommerce = Loadable(lazy(() => import("./shared/AppEcommerce")));

const ecommerceRoute = [
    {
        path: '/ecommerce',
        element: <AppEcommerce />,
    },
]

export default ecommerceRoute
