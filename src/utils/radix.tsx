export function getRadix(type: string) {
  switch (type) {
    case "decimal":
      return 10;
    case "binary":
      return 2;
    case "hexadecimal":
      return 16;
    default:
      return parseInt(type);
  }
}

export function isValidRadix(radix: number) {
  return 2 <= radix && radix <= 36;
}

export function getDigitCount(radix: number) {
  if (!isValidRadix(radix)) return 0;
  switch (radix) {
    case 2:
      return 16;
    case 3:
      return 10;
    case 4:
      return 8;
    case 5:
    case 6:
      return 6;
    case 7:
    case 8:
    case 9:
      return 5;
    case 10:
    case 16:
    default:
      return 4;
  }
}

export function getRegex(radix: number) {
  switch (radix) {
    case 10:
      return /\D/;
    case 2:
      return /[^01]/;
    case 16:
      return /[^0-9A-Fa-f]/;
    default:
      return undefined;
  }
}
