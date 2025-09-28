import {Avatar, Typography} from "antd";
import {UserOutlined} from "@ant-design/icons";

type ProfileProps = {
    username?: string;
}

export const Profile = ({username}: ProfileProps) => {
    return (
        <div style={{display: "flex", width: "200px", gap: "10px", paddingLeft: "20px"}}>
            <Avatar shape={"square"} size={24} icon={<UserOutlined/>}/>
            <Typography>{username}</Typography>
        </div>
    )
}