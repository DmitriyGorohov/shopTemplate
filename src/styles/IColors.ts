interface IBaseColors {
  [key: string]: string | IBaseColors;
}

export interface IColors extends IBaseColors {
  white: string,
  textBlack: string,
  textGray: string;
  gray: string;
  grayCartBorder: string;
  input: {
    borderColor: string;
    placeholderColor: string;
  },
  button: {
    buttonGreen: string;
    buttonYellow: string;
    buttonOrange: string;
    buttonDisable: string;
    buttonError: string;
  },
}
