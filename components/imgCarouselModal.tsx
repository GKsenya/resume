import { ActionIcon, Flex, Modal, ModalProps } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import { ImgCarousel, ImgCarouselProps } from './imgCarousel';
import classes from './imgCarouselModal.module.css';

type ImgCarouselModalProps = {
    opened: ModalProps['opened'],
    onClose: ModalProps['onClose'],
    modalSize?: ModalProps['size'],
    visibleFrom?: ModalProps['visibleFrom'],
} & ImgCarouselProps;

export const ImgCarouselModal = ({
    opened,
    onClose,
    modalSize,
    visibleFrom,
    ...props
}: ImgCarouselModalProps) => {
    return (
        <Modal
            size={modalSize}
            padding={0}
            opened={opened}
            onClose={onClose}
            withCloseButton={false}
            classNames={{ content: classes.content, inner: classes.inner }}
            autoFocus={false}
            visibleFrom={visibleFrom}
        >
            <ImgCarousel {...props} />
            <Flex justify='center'>
                <ActionIcon
                    radius={28}
                    size={56}
                    color='gray.5'
                    onClick={onClose}
                    style={{ opacity: 0.7 }}
                >
                    <IconX />
                </ActionIcon>
            </Flex>
        </Modal>
    )
}