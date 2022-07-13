import {
  FaDownload,
  FaBook,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
  FaEye,
} from "react-icons/fa";
import Button from "../common/Button";

function TranslateToolBar() {
  return (
    <div className="translate-toolbar">
      <div className="translate-toolbar__svg-wrapper">
        <FaDownload />
        <FaBook />
        <FaAngleDoubleLeft />
        <FaAngleLeft />
        <FaAngleRight />
        <FaAngleDoubleRight />
        <FaEye />
      </div>
      <Button name="Confirm highlights" action={() => console.log()} />
    </div>
  );
};

export default TranslateToolBar;
