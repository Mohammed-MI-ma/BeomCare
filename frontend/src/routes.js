// routes.js
import React, { lazy } from "react";
import CustomSuspense from "./Components/CustomSuspense";
import CategoryPage from "./Pages/CategoryPage";

//__lazy_loaded_components

//__Authentication_components
const LoginPage = lazy(() => import("./Pages/LoginPage"));
const SignUpPage = lazy(() => import("./Pages/SignUpPage"));
const SubscriptionPage = lazy(() => import("./Pages/SubscriptionPage"));
const LandingPage = lazy(() => import("./Pages/LandingPage"));

//__protectedRoute
const HomePage = lazy(() => import("./Pages/HomePage"));

//__404_page
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage"));

export const routes = [
  {
    path: "/",
    element: (
      <CustomSuspense id="landingPage">
        <LandingPage />
      </CustomSuspense>
    ),
  },
  // TODO: //AUTHENTICATION ROUTES

  //__loginRoute
  {
    path: "/beom/account/log-in",
    element: (
      <CustomSuspense id="login-page">
        <LoginPage />
      </CustomSuspense>
    ),
  },

  // TODO: //AUTHENTICATION ROUTES

  //__SignUp
  {
    path: "/beom/account/sign-up",
    element: (
      <CustomSuspense id="signUp-page">
        <SignUpPage />
      </CustomSuspense>
    ),
  },
  //__Subscription
  {
    path: "/beom/institute/addCenter",
    element: (
      <CustomSuspense id="signUp-page">
        <SubscriptionPage />
      </CustomSuspense>
    ),
  },
  {
    path: "/beom/category/:categoryId",
    element: (
      <CustomSuspense id="category page">
        <CategoryPage />
      </CustomSuspense>
    ),
  },

  // TODO: //PROTECTED ROUTE
  {
    path: "/beom/homepage",
    element: (
      <CustomSuspense id="homepage">
        <HomePage />
      </CustomSuspense>
    ),
  },
  // TODO: //404 ROUTE
  {
    path: "*",
    element: (
      <CustomSuspense id="404">
        <NotFoundPage />
      </CustomSuspense>
    ),
  },
];
