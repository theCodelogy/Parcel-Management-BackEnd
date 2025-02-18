import { Router } from "express";
import { SuperAdimnRoutes } from "../modules/superAdmin/superAdmin.route";
import { AuthRoutes } from "../modules/auth/auth.rout";
import { DeliveryManRoutes } from "../modules/Delivery Man/deliveryMan.route";
import { MerchantRoutes } from "../modules/Merchant/Merchant.route";

const router = Router(); // Create a new Router instance

// Define paths and their route handlers
const moduleRoutes = [
  { path: "/superAdmin", route: SuperAdimnRoutes },
  { path: "/auth", route: AuthRoutes },
  { path: "/deliveryMan", route: DeliveryManRoutes },
  { path: "/merchant", route: MerchantRoutes },
  // Add more routes as needed
];

// Add each route to the router
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router; // Export the router to be used in the main app
