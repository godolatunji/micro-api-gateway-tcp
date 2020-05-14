const serviceTypes = {
  USER_SVC: 'USER_SVC',
  INVENTORY_SVC: 'INVENTORY_SVC',
  AUTHORIZATION_SVC: 'AUTHORIZATION_SVC',
};

export interface ILoginPayload {
  email: string;
  password: string;
}

export const TYPES = {
  ...serviceTypes,
};

export type JSONPrimitive = string | number | boolean | null;
export type JSONValue = JSONPrimitive | JSONObject | JSONArray;
export type JSONObject = { [member: string]: JSONValue };
export type JSONArray = string[] | number[] | boolean[];

export class ResponseDto {
  status: boolean;
  message: string;
  data: any;
}
