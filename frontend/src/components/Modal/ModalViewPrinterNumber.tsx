import { SvgIcon } from "@mui/material";
import { MdClose } from "react-icons/md";
import Modal from "react-modal";
import { formatTimeStamp } from "../../utils/formatTimeStamp";
import Wrapper from "../Wrapper";
type ModalViewPrinterNumberProps = {
  toggle: boolean;
  service: string;
  dataObj: any;
  closeModal: () => void;
};
const ModalViewPrinterNumber = (props: ModalViewPrinterNumberProps) => {
  const { dataObj, closeModal, toggle } = props;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      padding: 0,
      borderRadius: "16px",
      border: "1px solid rgba(0,0,0,0.3)",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <Modal
        isOpen={toggle}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <Wrapper className="text-center w-96-override">
          <Wrapper className="font-bold text-3xl md:mt-16">
            Số thứ tự được cấp
          </Wrapper>
          <Wrapper className="font-bold text-6xl text-orange-400 md:my-8">
            {dataObj.stt}
          </Wrapper>
          <Wrapper className="font-normal text-xl md:mb-8">
            DV: {dataObj.nameService}
          </Wrapper>
          <Wrapper className="flex justify-center items-center bg-orange-400 h-28">
            <Wrapper className="flex flex-col items-center gap-y-4">
              <Wrapper className="text-2xl-override text-white">
                Thời gian cấp: {formatTimeStamp(dataObj.timeGrant)}
              </Wrapper>
              <Wrapper className="text-2xl-override text-white">
                Thời gian cấp: {formatTimeStamp(dataObj.expireUse)}
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Wrapper className="absolute right-5 top-4 text-orange-400 font-bold">
            <SvgIcon component={MdClose} onClick={closeModal} />
          </Wrapper>
        </Wrapper>
      </Modal>
    </div>
  );
};

export default ModalViewPrinterNumber;
