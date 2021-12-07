import NotFound from "app/views/sessions/NotFound";
import ecommerceRoute from "app/views/ecommerce/EcommerceRoute";
import sessionRoutes from "app/views/sessions/SessionRoutes";
import MatxLayout from '../components/MatxLayout/MatxLayout'

export const AllPages = () => {
  const all_routes = [
    {
      path: "/",
      element: (
        <MatxLayout />
      ),
      children: [
        ...ecommerceRoute,
      ],
    },
    ...sessionRoutes,
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  return all_routes;
}