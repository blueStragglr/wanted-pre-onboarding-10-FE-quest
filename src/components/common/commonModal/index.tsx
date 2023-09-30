//* 모달 창
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BiX as CloseButton } from "react-icons/bi";
import Portal from "./Portal";

interface ModalProps {
  onClose: () => void;
  maskClosable?: boolean;
  closable?: boolean;
  visible: boolean;
  children: React.ReactNode;
}

function Modal({
  onClose,
  maskClosable = true,
  closable = true,
  visible,
  children,
}: ModalProps) {
  //* 바깥쪽 눌러 닫기
  const onMaskClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("event", e.target, e.currentTarget);
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    //* 모달이 떠있으면 뒤에 화면이 움직이지 않도록
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  return (
    <Portal>
      <ModalOverlay $visible={visible} />
      <ModalWrapper
        onClick={(e) => maskClosable && onMaskClick(e)}
        tabIndex={-1}
        $visible={visible}
      >
        <ModalInner tabIndex={0} className="modal-inner">
          {closable && <CloseButton size={30} onClick={handleClose} />}
          {children}
        </ModalInner>
      </ModalWrapper>
    </Portal>
  );
}

Modal.propTypes = {
  visible: PropTypes.bool,
};

//* $visible인 이유는 $ 기호를 붙여 DOM요소로 전달되지 않게 하기 위해
const ModalWrapper = styled.div<{ $visible: boolean }>`
  box-sizing: border-box;
  display: ${(props) => (props.$visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

//* 바깥 부분 투명한 회색
const ModalOverlay = styled.div<{ $visible: boolean }>`
  box-sizing: border-box;
  display: ${(props) => (props.$visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;

  svg {
    position: absolute;
    right: 10px;
    top: 10px;

    :hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
`;

export default Modal;
