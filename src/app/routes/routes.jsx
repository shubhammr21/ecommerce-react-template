import NotFound from "app/views/NotFound";
import ecommerceRoute from "app/views/ecommerce/EcommerceRoute";
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
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  return all_routes;
}