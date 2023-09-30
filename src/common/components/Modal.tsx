import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import Txt from './Txt';
import Spacing from './Spacing';
import Button from './Button';
import colors from '../../style/colors';

const ModalContext = createContext<
  ((modalContents: ModalContents) => void) | null
>(null);

interface ModalContents {
  title?: string;
  message?: string;
  variant?: '1-button' | '2-button';
  buttonSpan: string[];
  onConfirm?: () => void;
}
export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContents, setModalContents] = useState<ModalContents>({
    variant: '1-button',
    buttonSpan: [],
  });
  const openModal = useCallback((modalContents: ModalContents) => {
    setIsOpen(true);
    setModalContents({ ...modalContents });
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', closeByEsc);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', closeByEsc);
    };
  }, [isOpen]);

  const closeByEsc = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === 'Escape') {
        closeModal();
      }
    },
    [closeModal],
  );

  return (
    <ModalContext.Provider value={openModal}>
      <>
        {children}
        {isOpen &&
          createPortal(
            <Modal closeModal={closeModal} {...modalContents} />,
            document.body,
          )}
      </>
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const openModal = useContext(ModalContext);
  if (!openModal) throw new Error('There is no modal context!');

  return { openModal };
};

interface ModalProps extends ModalContents {
  closeModal: () => void;
}

const Modal = ({
  closeModal,
  message,
  variant,
  buttonSpan,
  title,
  onConfirm,
}: ModalProps) => {
  const handleConfirm = () => {
    onConfirm?.();
    closeModal();
  };

  return (
    <>
      <Backdrop onClick={closeModal} />
      <ModalWrapper>
        {title && (
          <>
            <Txt typography="h3">{title}</Txt>
            <Spacing direction={'horizontal'} size={10}></Spacing>
          </>
        )}
        {message && (
          <>
            <Txt color={colors.black50}>{message}</Txt>
            <Spacing direction={'horizontal'} size={10}></Spacing>
          </>
        )}
        {variant === '1-button' ? (
          <OneButtonWrapper>
            <Button onClick={closeModal} style={{ minWidth: '100px' }}>
              {buttonSpan[0] ? buttonSpan[0] : '확인'}
            </Button>
          </OneButtonWrapper>
        ) : (
          <TwoButtonWrapper>
            <Button
              variant="secondary"
              onClick={closeModal}
              style={{ flex: 1 }}
            >
              {buttonSpan[0] ? buttonSpan[0] : '취소'}
            </Button>
            <Spacing direction="horizontal" size={10} />
            <Button onClick={handleConfirm} style={{ flex: 1 }}>
              {buttonSpan[1] ? buttonSpan[1] : '확인'}
            </Button>
          </TwoButtonWrapper>
        )}
      </ModalWrapper>
    </>
  );
};

export default Modal;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  min-width: 400px;
  min-height: 140px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const OneButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const TwoButtonWrapper = styled.div`
  display: flex;
`;
