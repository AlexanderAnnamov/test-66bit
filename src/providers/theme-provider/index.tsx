import React,{ PropsWithChildren } from "react";
import { useLocalStorage } from "usehooks-ts";

import type { ParamsTheme } from "../../redux/types";
import { useGetThemeQuery } from "../../redux/api/theme/theme";

const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
    
    const [theme] = useLocalStorage<ParamsTheme>('theme', 'light')
    const {data} = useGetThemeQuery(theme)
    
    document.documentElement.style.setProperty('--main-color', data?.mainColor as string);
    document.documentElement.style.setProperty('--second-color', data?.secondColor as string);
    document.documentElement.style.setProperty('--text-color', data?.textColor as string);
  
    return <>{children}</>
  }

  export default ThemeProvider;