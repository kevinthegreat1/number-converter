export default function getRadix(type: string) {
  switch (type) {
    case "binary":
      return 2;
    case "hexadecimal":
      return 16;
    default:
      return 10;
  }
}
