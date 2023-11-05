'use client';

import React from 'react';
import { ConfigProvider, Flex, Layout, Space } from 'antd';

import theme from './theme/themeConfig';
import Image from 'next/image';

const { Header, Footer, Content } = Layout;

const iconStyle = {
  backgroundImage: "url('https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/homePageV3/home-revamp-sprite16.webp')",
  backgroundPosition: '0px -425px',
  backgroundSize: '300px 550px',
  width: '42px',
  height: '42px',
  borderRadius: '100%'
}

const Home = () => (
  <div className="App">
    <ConfigProvider theme={theme}>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
          <Header className='bg-slate-900 h-[64px] flex items-center'>
            <div className="text-white h-full">
              <span className='bg-sky-600 border border-r-0 rounded-l px-1.5 py-1'>Test</span>
              <span className='border border-l-0 px-1.5 py-1 rounded-r'>Trip</span>
            </div>
          </Header>
          <Content className='h-[500px] p-[50px]'>
            <Flex justify='center' className='border rounded shadow py-5'>
              <div>
                <a className='flex flex-col justify-center items-center'>
                  <span style={iconStyle}></span>
                  <h1 className='font-bold'>Flights</h1>
                </a>
              </div>
            </Flex>
          </Content>
          <Footer>
            &copy; All rights reserved by TestTrip
          </Footer>
        </Layout>
      </Space>
    </ConfigProvider>
  </div>
);

export default Home;