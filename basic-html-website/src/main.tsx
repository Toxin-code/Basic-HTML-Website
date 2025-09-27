import { StrictMode } from 'react'
import { routeTree } from './routeTree.gen'
import ReactDOM from "react-dom/client"
import {createRouter, RouterProvider} from "@tanstack/react-router";
import './index.css'

const router = createRouter({routeTree})

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
