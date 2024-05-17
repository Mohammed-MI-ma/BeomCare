// routes.js
import React, { lazy } from "react";
import CustomSuspense from "./Components/CustomSuspense";

//__lazy_loaded_components

//__Authentication_components
const LoginPage = lazy(() => import("./Pages/LoginPage"));
const SignUpPage = lazy(() => import("./Pages/SignUpPage"));
const SubscriptionPage = lazy(() => import("./Pages/SubscriptionPage"));

//__404_page
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage"));

export const routes = [
  {
    path: "/",
    element: <CustomSuspense id="landingPage"></CustomSuspense>,
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
