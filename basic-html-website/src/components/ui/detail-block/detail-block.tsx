import {Typography} from "antd";

type DetailBlockProps = {
    title: string;
    subtitle?: string;
    content: string;
}

export const DetailBlock = ({title, content, subtitle}: DetailBlockProps) => {
    return (
        <>
            <Typography style={{color: "#55af66", marginBottom: "10px"}} className={"main-title"}>{title}</Typography>
            <Typography style={{color: "#1c73c3"}} className={"main-title-description"}>{subtitle} </Typography>
            <Typography style={{whiteSpace: "pre-line", marginBottom: "16px"}}
                        className={"main-title-description"}>{content}</Typography>
        </>
    )
}