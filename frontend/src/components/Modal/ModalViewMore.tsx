import Modal from "react-modal";
import Wrapper from "../Wrapper";
type ModalViewMoreProps = {
  toggle: boolean;
  service: string;
  closeModal: () => void;
};
const ModalViewMore = (props: ModalViewMoreProps) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      borderRadius: "16px",
      border: "1px solid rgba(0,0,0,0.3)",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <Modal
        isOpen={props.toggle}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <Wrapper className="text-sm text-black-400">{props.service}</Wrapper>
      </Modal>
    </div>
  );
};

export default ModalViewMore;
