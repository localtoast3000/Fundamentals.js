interface ArrayOptions {
  range?: { min: number; max: number };
  sorted?: boolean;
  random?: boolean;
}

export function genArray(
  contentType: string = 'number',
  length: number = 10,
  options: ArrayOptions | null
) {
  const generatedArray = Array(length)
    .fill('')
    .map((slot, i) => {
      if (contentType === 'number') {
        if (options?.random)
          return genNumberInRange(
            options?.range?.min ? options?.range?.min : 0,
            options?.range?.max ? options?.range?.max : 100
          );
        else return i;
      }
      if (contentType === 'string') return genString(genNumberInRange(5, 50));
    });

  //@ts-ignore
  if (options?.sorted) return generatedArray.sort((a, b) => a - b);
  return generatedArray;
}

export function genString(length: number = 10) {
  return Array(length)
    .fill('')
    .map(() => String.fromCharCode(genNumberInRange(32, 126)))
    .join('');
}

export function genNumberInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
