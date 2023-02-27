export default function divide(a, b) {
  let res = (Number(a) / Number(b)).toFixed(3);
  return `${a} + ${b} = ${res}`;
}
