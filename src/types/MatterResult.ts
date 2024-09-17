
type Input = string | Buffer

export interface MatterResult<I extends Input> {
  data: { [key: string]: string, title: string, date: string }
  content: string
  excerpt?: string
  orig: Buffer | I
  language: string
  matter: string
  stringify(lang: string): string
}

