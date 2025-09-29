import {Typography} from "antd";
import {Fragment} from "react";

type ReviewProps = {
    description: string;
    username: string;
    profession: string;
}

export const Review = ({description, profession, username}: ReviewProps) => {
    const lines = description?.split('\\n');

    return (
        <div style={{
            border: "2px solid black",
            borderRadius: "35px",
            fontWeight: 500,
            padding: "20px",
            marginRight: "20px"
        }}>
            <Typography>
                {lines?.map((line, index) => (
                    <Fragment key={index}>
                        {line}
                        {index < lines.length - 1 && <br/>}
                    </Fragment>
                ))}
            </Typography>
            <Typography style={{color: "#d2d2d2"}}>{profession}</Typography>
            <Typography style={{color: "#d2d2d2"}}>{username}</Typography>
        </div>
    )
}