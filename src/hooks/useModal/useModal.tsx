import React from 'react';
import { Modal as ModalComponent } from '@mui/material'
import { SwipeUnlockUI } from '@/components/ui/UIs'

type Props = {
    defaultPositionY?: number;
    contentMaxWidth?: number;
}

type ModalProps = {
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

export type UseModal = (props: Props) => {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    Modal: React.VoidFunctionComponent<ModalProps>;
}

export const useModal: UseModal = ({contentMaxWidth, defaultPositionY}) => {
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
    const Modal: React.VFC<ModalProps> = ({
        children
    }) => (
        <ModalComponent
            open={isModalOpen}
            onClose={(e) => setIsModalOpen(false)}
            style={{
                maxWidth: `${contentMaxWidth || 700}px`,
                margin: "auto"
            }}
        >
            <SwipeUnlockUI
                onSwipeUnlock={() => {
                    setIsModalOpen(false);
                }}
                defaultPositionY={defaultPositionY}
            >
                {children}
            </SwipeUnlockUI>
        </ModalComponent>
    )

    return {
        isModalOpen,
        setIsModalOpen,
        Modal
    }
}