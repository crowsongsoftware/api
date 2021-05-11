export interface CreateUserDto {
    id: string;
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    salt?: string;
    permissionLevel?: number;
}