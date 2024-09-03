export function getRadix(type: string) {
  switch (type) {
    case "binary":
      return 2;
    case "hexadecimal":
      return 16;
    default:
      return 10;
  }
}

export function getDigitCount(type: string) {
  switch (type) {
    case "binary":
      return 16;
    case "hexadecimal":
      return 4;
    default:
      return 4;
  }
}
