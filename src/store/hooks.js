import Context from "./Context";
import { useContext } from "react";

export const useThemeState = () => {
    const [state, dispatch] = useContext(Context);
    return [state, dispatch];
};