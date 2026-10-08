/**
 * Slovak typography: a one-letter word (a, i, k, o, s, u, v, z) must not end a
 * line, so the space after it becomes a no-break space. Use it on body copy
 * that comes from data; copy written straight into markup uses &nbsp;.
 */
export function tie(text: string): string {
  return text.replace(/(?<=^|[\s(])([aikosuvz]) /giu, '$1\u00a0');
}
