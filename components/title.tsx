import { Divider, Title as MantineTitle, TitleProps as MantineTitleProps } from '@mantine/core';

type TitleProps = {
    label: string;
} & MantineTitleProps;

export const Title = ({label, ...props}: TitleProps) => (
    <>
        <MantineTitle order={2} pb='sm' {...props}>{label}</MantineTitle>
        <Divider size='lg' w={80} color='orange.5' />
    </>
)