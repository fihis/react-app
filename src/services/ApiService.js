import users from '../infrastructure/Mocks'

class ApiService {
    getUserById(id) {
        //return users.find((user) => user.id === id)
        let response = fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        let user = response.json();
        return user;
    }
}




export default new ApiService();