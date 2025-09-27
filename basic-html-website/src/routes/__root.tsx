import {createRootRoute, Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/react-router-devtools'
import {NavigationBar} from "@/components/layout/navigation-bar/navigation-bar.tsx";

const RootLayout = () => (
    <>
        <main className={"max-container"}>
            <NavigationBar/>
            <Outlet/>
        </main>
        <TanStackRouterDevtools/>
    </>
)

export const Route = createRootRoute({component: RootLayout})