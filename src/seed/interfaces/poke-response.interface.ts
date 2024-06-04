export interface PokeResponse {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toPokeResponse(json: string): PokeResponse {
    return JSON.parse(json);
  }

  public static pokeResponseToJson(value: PokeResponse): string {
    return JSON.stringify(value);
  }
}
