export interface IDataSlider {
    id: number;
    src: string;
    title: string;
    subtitle: boolean;
    subtitleText?: string;
    button: boolean;
    buttonText?: string;
    route?: string;
}

export interface IDataService {
    id: number;
    icon: string;
    title: string;
    text: string;
}
