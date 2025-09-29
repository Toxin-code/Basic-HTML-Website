import {Typography} from "antd";
import {Fragment} from "react";

type DescriptionProps = {
    title?: string;
    titleFontSize?: string;
    content?: string;
    contentColor?: string;
    subContent?: string;
}

export const Description = ({
                                subContent,
                                title,
                                titleFontSize,
                                content,
                                contentColor,
                            }: DescriptionProps) => {
    const lines = content?.split('\\n');


    return (
        <>
            <Typography style={{
                paddingLeft: "10px",
                fontSize: titleFontSize,
                fontFamily: 'Patrick Hand, cursive',
            }}>{title}</Typography>

            <Typography style={{fontSize: "14px", color: contentColor, fontWeight: 500, paddingLeft: "10px"}}>
                {lines?.map((line, index) => (
                    <Fragment key={index}>
                        {line}
                        {index < lines.length - 1 && <br/>}
                    </Fragment>
                ))}
            </Typography>

            <Typography style={{fontSize: "14px", color: "#1c73c3", paddingLeft: "10px"}}>{subContent}</Typography>
        </>
    )
}