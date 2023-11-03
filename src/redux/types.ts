type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export type ParamsTheme = 'dark' | 'light' | 'blue';
export type TitleVariables = "Светлая тема" | "Темная тема" | "Синяя тема";

export interface Theme {
    id: number,
    name: ParamsTheme,
    mainColor: Color,
    secondColor:Color,
    title: TitleVariables,
    textColor: Color
}

export interface New {
    title: string,
    content: string ,
    id: number,
    createdAt: string,
    updatedAt: string
}


