import NotFound from "app/views/NotFound";
import ecommerceRoute from "app/views/ecommerce/EcommerceRoute";
import { AppLayout } from '../components'

export const AllPages = () => {
  const all_routes = [
    {
      path: "/",
      element: (
        <AppLayout />
      ),
      children: [
        ...ecommerceRoute,
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  return all_routes;
}