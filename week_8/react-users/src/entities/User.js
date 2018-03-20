class User {
    constructor(user) {
        this.name = `${user.name.first} ${user.name.last}`;
        this.email = user.email;
        this.date = user.dob;
        this.photo = user.picture.large;

    }

    getEmail(email) {
        const end = (this.email.split("@")[1]);
        const start = `${this.email.substring(0,3)}`;
        const mid = `${(this.email.split("@")[0]).substr(-3)}`;
        const hidden = `${start}...${mid}@${end}`;
        return hidden;

    }
    getDate(date) {
        const dob = new Date(this.date);
        const year = dob.getFullYear();
        const month = dob.getMonth()+1;
        const day = dob.getDate();

        return `${day}-${month}-${year}`;


    }
}

export default User;