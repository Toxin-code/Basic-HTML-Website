import {createFileRoute} from '@tanstack/react-router'
import { Typography } from 'antd';

const { Title } = Typography;

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <>
            <Title level={3}> Vladislau</Title>
        </>
    )
}