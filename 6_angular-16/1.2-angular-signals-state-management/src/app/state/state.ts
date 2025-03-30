import { Category } from "../model/model";

export interface State {
  data: Category[],
  loading: boolean,
  error: string | null
}