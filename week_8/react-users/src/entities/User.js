/*import {
    hidden,
    getDate
} from "../shared/utility/util"*/
class User {
    constructor(user) {
        this.name = `${user.name.first} ${user.name.last}`;
        this.email = user.email;
        this.date = user.dob;
        this.photo = user.picture.large;

        /*this.email =() => {
            const spl = user.email.indexOf('@');
            const string = user.email.substring(0, spl) + '...';
            return string;
        };
        this.date = () => {
            const date = new Date(user.dob);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();

            return `${year}-${month}-${day}`;

        }*/
    }
}

export default User;