import type { Dispatch, SetStateAction } from "react";



export interface Theme {
    theme: string,
    setTheme: Dispatch<SetStateAction<string>>
}