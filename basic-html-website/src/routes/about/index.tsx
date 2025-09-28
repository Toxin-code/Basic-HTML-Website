import {createFileRoute} from '@tanstack/react-router'
import {AboutHeader} from "@/routes/about/components/header/about-header";
import {AboutMainContent} from "@/routes/about/components/main/about-main-content";

export const Route = createFileRoute('/about/')({
    component: About,
})

function About() {
    return (
        <>
            <AboutHeader/>
            <AboutMainContent/>
        </>
    )
}