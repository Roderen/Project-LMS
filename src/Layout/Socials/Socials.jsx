import React from 'react';
import {
 Button, Flex, Layout, Typography,
} from 'antd';
import {
 FacebookOutlined, GithubOutlined, InstagramFilled, LinkedinOutlined, YoutubeOutlined,
} from '@ant-design/icons';

const socialContainerStyle = {
  padding: '20px 50px 20px 20px',
  backgroundColor: '#fff',
};

const paragraphStyle = {
  color: '#7e7e7e',
  fontSize: '.9375rem',
  marginBottom: '0',
};

const buttonStyle = {
  border: 'none',
  height: '100%',
  padding: '5px',
  boxShadow: 'none',
};

function Socials() {
  return (
    <Layout style={socialContainerStyle}>
      <Flex align="center" justify="space-between">
        <Typography.Paragraph style={paragraphStyle}>
          Не забудь подписаться на наши соц. сети и следить за новостями!
        </Typography.Paragraph>
        <Flex gap="20px">
          <Button style={buttonStyle} href="https://google.com" target="_blank" rel="noreferrer">
            <YoutubeOutlined style={{ fontSize: '30px' }} />
          </Button>
          <Button style={buttonStyle} href="https://google.com" target="_blank" rel="noreferrer">
            <LinkedinOutlined style={{ fontSize: '30px' }} />
          </Button>
          <Button style={buttonStyle} href="https://google.com" target="_blank" rel="noreferrer">
            <InstagramFilled style={{ fontSize: '30px' }} />
          </Button>
          <Button style={buttonStyle} href="https://google.com" target="_blank" rel="noreferrer">
            <GithubOutlined style={{ fontSize: '30px' }} />
          </Button>
          <Button style={buttonStyle} href="https://google.com" target="_blank" rel="noreferrer">
            <FacebookOutlined style={{ fontSize: '30px' }} />
          </Button>
        </Flex>
      </Flex>
    </Layout>
  );
}

export default Socials;
