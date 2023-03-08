// Single Responsibility Principle.
// Working on Division only.

export default function divide(a, b) {
  const ans = (Number(a) / Number(b)).toFixed(3);
  return ans;
}
