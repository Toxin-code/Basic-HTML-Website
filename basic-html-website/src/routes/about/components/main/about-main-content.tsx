import {Description} from "@/components/ui/description";
import {Divider} from "antd";

export const AboutMainContent = () => {
    return (
        <div style={{display: "flex"}}>
            <div style={{flexDirection: "column", borderRight: "2px solid black"}}>
                <Description titleFontSize="22px" title="Projects" content="HTML +Libs Portfolio"/>
                <Divider style={{borderColor: "black", borderWidth: "2px", marginBottom: "12px", marginTop: "12px"}}/>
                <Description content="Calculator"/>
                <Divider style={{borderColor: "black", borderWidth: "2px", marginBottom: "12px", marginTop: "12px"}}/>
                <Description content="Quiz App"/>
                <Divider style={{borderColor: "black", borderWidth: "2px", marginBottom: "12px", marginTop: "12px"}}/>
                <Description content="CountDown Timer"/>
                <Divider style={{borderColor: "black", borderWidth: "2px", marginBottom: "12px", marginTop: "12px"}}/>
                <Description content="Product Upcoming Page"/>
            </div>

            <div style={{flexDirection: "column", borderRight: "2px solid black"}}>
                <Description titleFontSize="22px" title="Work Experience" content="None" subContent="Visit my Profile"/>
                <Divider style={{borderColor: "black", borderWidth: "2px", marginBottom: 0}}/>

                <Description titleFontSize="22px" title="OpenSource Work"
                             content="Contributed to 50 opensource\n projects. Made my own projects with 200 GitHub Stars"
                             subContent="Visit my GitHub Profile"/>
            </div>

            <div style={{flexDirection: "column"}}>
                <Description titleFontSize="22px" title="Education"
                             content="Graduated from BSUIR with a degree in Computer Science\n
                             Courses I took:\n - Object Oriented Programming\n
                             - Data Structures and Algorithms\n
                             - Web Development\n - Databases\n
                             - Software Engineering
                             - Operating Systems\n
                             - Computer Networks \n
                             - Mathematics for Computer Science"
                />
            </div>
        </div>
    )
}