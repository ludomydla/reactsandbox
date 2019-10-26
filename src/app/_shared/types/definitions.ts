export type InputType = "text" | "number" | "email" | "password";

export type Source = {
  title?: string;
  author?: string;
  source: string;
  licence?: string;
};

export type Dimensions = {
  height: number;
  width: number;
};
