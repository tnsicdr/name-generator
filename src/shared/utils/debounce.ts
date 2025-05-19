// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function debounce(fn: Function, delay = 5000) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: unknown, ...args: unknown[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}
