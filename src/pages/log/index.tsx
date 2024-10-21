import { loginCheck } from "../../commons/hocs/loginCheck";
import LogContainer from "../../components/log/logContainer";

const LogPage = () => {
  return <LogContainer />;
};

export default loginCheck(LogPage);
