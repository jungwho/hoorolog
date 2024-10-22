import { loginCheck } from "../../components/commons/hocs/loginCheck";
import LogContainer from "../../components/utils/log/logContainer";

const LogPage = () => {
  return <LogContainer />;
};

export default loginCheck(LogPage);
