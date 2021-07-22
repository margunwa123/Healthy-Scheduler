import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface ModalContextType {
  open: boolean;
  modalData: AnyObject;
  setModalData?: Dispatch<SetStateAction<AnyObject>>;
  toggleOpen?: () => void;
}

const ModalContext = createContext<ModalContextType>({
  open: false,
  modalData: {},
});

export const ModalProvider: FC = ({ children, ...props }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<AnyObject>({});
  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <ModalContext.Provider
      value={{ open, modalData, setModalData, toggleOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

export default ModalContext;
