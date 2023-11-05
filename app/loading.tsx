'use client'
import { Flex, Spin } from 'antd';

const Loading = () => {
    return (
        <Flex justify='center' align='center' className='h-screen'>
            <Spin />
        </Flex>
    )
}

export default Loading