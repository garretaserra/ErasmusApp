export interface AuthResponse {
    user: {
        _id: string,
        email: string,
        name: string,
        access_token: string,
        expires_in: number
    }
}
