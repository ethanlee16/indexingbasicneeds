export default function kebabCase(string) {
  return string.replace(/\s+/g, "-").toLowerCase();
}
