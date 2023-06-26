import { SocialIcon } from 'react-social-icons';
import { Box } from '@chakra-ui/react';

export const SocialMediaIcons = () => {
  return (
    <Box display="flex" alignItems="center" gap={3}>
      <SocialIcon
        url="https://github.com/xdevguild/nextjs-dapp-template"
        bgColor="#fff"
        style={{ width: 30, height: 30 }}
      />
    </Box>
  );
};