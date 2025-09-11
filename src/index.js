import _, { uniqBy, orderBy, minBy } from 'lodash';
class Service {
    users;
    constructor() {
        this.users = [];
    }
    addUser(user) {
        if (user.id.length == 9 && user.yearOfBirth < 2025 && user.yearOfBirth > 1905) {
            this.users.push(user);
        }
    }
    getTheOldest(users) {
        const oldest = _.minBy(users, function (x) { return x.yearOfBirth; });
        console.log(oldest);
    }
    getAllNames(users) {
        return _.orderBy(_.uniqBy(users, 'name'), ['users.name'], ['asc']);
    }
}
//# sourceMappingURL=index.js.map