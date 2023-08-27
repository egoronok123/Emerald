import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import Rus from "./pages/Rus.tsx";
import Registration from "./pages/Registration.tsx";



const router = createBrowserRouter([
    {

        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children:[
            {

                path: '/ru',
                element: <Rus/>,
            },
            {
                path: '/ru/registration',
                element: <Registration/>,
            },

        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
