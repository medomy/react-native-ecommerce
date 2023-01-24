import { useColorScheme } from "react-native";

export function useIsDarkMode(){
    const status = useColorScheme();

    return status === "dark";
}