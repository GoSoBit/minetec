export class Account {

    public readonly id: string;

    public readonly password: string;

    constructor(id: string, password: string) {
        this.id = id;
        this.password = password;
    }
}