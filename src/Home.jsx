import React from 'react';
import { useForm } from 'react-hook-form';
import RegisterForm from './Register';
import { Box, Text } from '@chakra-ui/react';
import Test from './Test';

export default function Home() {
  return (
    <Box maxW="960px" mx="auto">
      <Test />
    </Box>
  );
}
