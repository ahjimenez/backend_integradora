export class Role {

    id: string;
    role: string; 
    Role: string;

    constructor(
        id: string,
        role: string,
    ) {
        this.id = id;
        this.role = role;   
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
