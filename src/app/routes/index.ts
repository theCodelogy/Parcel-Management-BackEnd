import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.rout";
import { DeliveryManRoutes } from "../modules/Delivery Man/deliveryMan.route";

const router = Router(); // Create a new Router instance

// Define paths and their route handlers
const moduleRoutes = [
  { path: "/user", route:UserRoutes  },
  { path: "/auth", route:AuthRoutes  },
  { path: "/deliveryMan", route:DeliveryManRoutes},
  // Add more routes as needed
];

// Add each route to the router
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router; // Export the router to be used in the main app
