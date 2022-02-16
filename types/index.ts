export type TPost = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
  };
};


export type IError = {
  message: string | string[];
  statusText?: string;
  success?: boolean;
};


export interface IStudent {
  matricno: number,
  password: string
}

export interface ISuccess<T> {
  success: boolean;
  message?: string | string[];
  student?: T;
  students?: T[];
}
