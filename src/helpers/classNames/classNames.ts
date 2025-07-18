type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, additianal: string[]): string {


  return [
    cls,
    ...additianal,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ')
}