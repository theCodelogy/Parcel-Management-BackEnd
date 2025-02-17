import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.rout";

const router = Router(); // Create a new Router instance

// Define paths and their route handlers
const moduleRoutes = [
  { path: "/user", route:UserRoutes  },
  { path: "/auth", route:AuthRoutes  },
  // Add more routes as needed
];

// Add each route to the router
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router; // Export the router to be used in the main app
