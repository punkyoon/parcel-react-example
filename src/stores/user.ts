import { decorate, observable, action } from 'mobx';


export interface User {
    username: string;
    age: number;
}

export default class UserStore {
    user: User | null;

    constructor() {
        this.user = null;
    }

    login = (user: User) => {
        console.log('Login');
        this.user = user
    }
  
    logout = () => {
        console.log('Logout');
        this.user = null;
    }
}

decorate(UserStore, {
    user: observable,
    login: action,
    logout: action
});
