import { userResponse } from "./userResponse";

export interface LoginResponse{
    success: boolean,
    detail: Array<userResponse>,
    message: string,
    token: string
}