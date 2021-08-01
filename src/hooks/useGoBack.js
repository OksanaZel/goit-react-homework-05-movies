import { useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";

const useGoBack = () => {
    const location = useLocation();
    const history = useHistory();
    const routerState = useRef(location.state?.from).current;

  const goBack = () => {
    history.push(routerState ?? "/");
  };

  return goBack;
};

export default useGoBack;