const KHMER_DIGITS = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"] as const

export function toKhmerNumber(value: number | string): string {
  return value
    .toString()
    .split("")
    .map(char => (/\d/.test(char) ? KHMER_DIGITS[Number(char)] : char))
    .join("")
}
