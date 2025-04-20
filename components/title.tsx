import { DefaultMantineColor, Divider, Title as MantineTitle, TitleProps as MantineTitleProps } from '@mantine/core';

type TitleProps = {
    label: string;
    color?: DefaultMantineColor;
    underlined?: boolean;
} & MantineTitleProps;

export const Title = ({ label, color = 'orange.5', underlined = true, ...props }: TitleProps) => (
    <>
        <MantineTitle order={2} pb='sm' {...props}>{label}</MantineTitle>
        {underlined && <Divider size='lg' w={80} color={color} />}
    </>
)