import {Profile} from "@/components/ui/profile";
import {Divider} from "antd";
import {Description} from "@/components/ui/description";

export const AboutHeader = () => {
    return (
        <>
            <div style={{transform: 'translateY(-20px)', display: 'flex', gap: '10px'}}>
                <Profile username="Uladzislau"/>
            </div>

            <div style={{
                marginTop: "20px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Description titleFontSize="42px"
                             title="Frontend Developer"
                             content="html with libs and styling"
                             contentColor="gray"
                />
            </div>

            <Divider style={{borderColor: "black", borderWidth: "2px", marginBottom: 0}}/>
        </>
    )
}