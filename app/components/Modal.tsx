import { IoCloseOutline } from "react-icons/io5";
interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isVisible, onClose, children }: ModalProps) => {
  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent) => {
    if (e.target && (e.target as HTMLElement).id === "wrapper") {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="flex flex-col">
        {/* Close button */}
        <IoCloseOutline
          onClick={onClose}
          size={30}
          color="white"
          className="cursor-pointer self-end"
        />

        <div className="bg-white p-6 rounded-lg shadow-lg">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
