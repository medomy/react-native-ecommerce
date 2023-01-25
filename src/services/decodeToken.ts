import jwtDecode from "jwt-decode";

export function decodeToken(token: string) {
    const data = jwtDecode(token);
    return data;
}