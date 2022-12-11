export class UsersListResponseModel {
    id: number | undefined;
    mobileNumber: string | undefined;
    name: string | undefined;
    password: string | undefined;
    email: string | undefined;
    contacts: Array<Contacts> = [];
}

export class Contacts {
    mobileNumber: string | undefined;
    email: string | undefined;
    id: number | undefined;
    userId: number | undefined;
}