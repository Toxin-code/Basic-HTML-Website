import {createFileRoute} from '@tanstack/react-router'
import {SectionTitle} from "@/components/ui/title";
import {DetailBlock} from "@/components/ui/detail-block";
import {Divider} from "antd";

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <>
            <Divider style={{borderColor: "black", borderTopWidth: 3 }}/>
            <SectionTitle text="Uladislau"/>
            <DetailBlock title={"Intern Frontend Developer"} content={"Mazurov street 58" +
                "\n Homel 246006 \n (25) 632-37-09 \n vladik5882@mail.ru"}/>

            <DetailBlock title={"Skills"} content={"React, CSS, JS, TS, REACT, " +
                "Figma to Design, MUI, ANTD, Next"}/>

            <DetailBlock title={"Education"} subtitle={"University Name: BSUIR, Location: Minsk, " +
                "Degree: high"} content={"Month 2024 to Month 2028"}/>
            
            <DetailBlock title={"Experience"} subtitle={"Company Name: Innowise," +
                " Location: Warsaw"} content={"Month 2025 to current"}/>

            <DetailBlock title={"Across the Internet"} content={"https://github.com/Toxin-code"}/>
        </>
    )
}