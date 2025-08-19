export class Role {
    public id: string;
    public role: string;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(
        id: string,
        role: string,
        createdAt: Date = new Date(),
        updatedAt: Date = new Date()
    ) {
        this.id = id;
        this.role = role;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    setId(id: string) {
        this.id = id;
    }

    value() {
        return {
            id: this.id,
            role: this.role
        };
    }
}
