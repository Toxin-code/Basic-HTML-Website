import {Typography} from "antd";

const {Title} = Typography;

type TitleProps = {
    text: string
}

export const SectionTitle = ({text}: TitleProps) => {

    return (
        <>
            <Title level={2}>{text}</Title>
        </>
    )
}