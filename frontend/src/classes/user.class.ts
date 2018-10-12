export interface Roles {
    haven?: boolean;
    carrier?: boolean;
    admin:  boolean;
  }
  
  export class User {
    email:    string;
    roles:    Roles;
  
    constructor(authData) {
      this.email    = authData.email
      this.roles    = { admin: false }
    }
  }