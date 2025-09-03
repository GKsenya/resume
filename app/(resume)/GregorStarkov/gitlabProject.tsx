import { Flex, Image, Paper, Text, Title } from '@mantine/core';

type GitlabProjectProps = {
  name: string;
  description: string;
  imgUrl?: string;
}

export const GitLabProject = ({ name, description, imgUrl }: GitlabProjectProps) => {
  return (
    <Paper p='xl' radius={8} shadow='xl'>
      <Flex pos='relative'>
        <Image src={imgUrl} pos='absolute' />
        <Title order={4}>{name}</Title>
        <Text>{description}</Text>
      </Flex>
    </Paper>
  )
};
