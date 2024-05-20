interface IButton {
    children: string, 
    className: string,
    isActive?: boolean,
    onClick: Function

}

export enum INPUT_TYPES {
    TEXTAREA = 'textarea',
    NUMBER = 'number',
    PASSWORD = 'password',
    TEXT = 'text'
}

interface IInput {
    className: string,
    label: string,
    placeholder: string,
    value?: string | number,
    onChange?: Function,
    type?: INPUT_TYPES,
    disabled?: boolean,
    errorMessage?: string
}

export enum POST_TYPES {
    DETAIL = 'detail',
    VERTICAL = 'vertical',
    SMALL = 'small'
}

export enum THEMES {
    DARK = 'dark',
    LIGHT = 'light'
}

interface IPost {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number,
}

interface IPostWithType extends IPost {
    type: POST_TYPES
}

interface IContentPage {
    post: number,
    title: string,
    image: string,
    text: string
}

export type Cancel = {
    isActive: boolean;
  };

export type {
    IButton,
    IInput,
    IPost,
    IPostWithType,
    IContentPage
}

