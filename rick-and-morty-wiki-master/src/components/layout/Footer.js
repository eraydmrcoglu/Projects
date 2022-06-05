import React from 'react';
import { Box, Link } from '@chakra-ui/core';

// position="absolute"
// w="100%"
// bottom="0"

const Footer = () => (
  <Box textAlign="center" fontSize="13px" p="10px" shadow="sm">
    {`© ${new Date().getFullYear()}, 💻 with ❤ by `}
    <Link target="_blank" textDecoration="underline" href="https://victorlandim.com">
      Victor Landim
    </Link>
    .
  </Box>
);

export default Footer;
