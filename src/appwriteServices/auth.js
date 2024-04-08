import {Client, Account, ID} from 'appwrite'
import conf from '../config/config.js'

class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client = this.client.setEndpoint(conf.appwrite_base_url).setProject(conf.appwrite_project_id)
        this.account = new Account(this.client)
    }

    //SignUp
    async createAccount ({email, password, name}) {
        try {
            const user = await this.account(ID.unique(), email, password, name);

            if(user){
                return this.loginAccount({email,password})
            }else{
                return user;
            }

        } catch (error) {
            console.log(error);
        }
    }

    //Login
    async loginAccount ({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            console.log(error);
        }
    }

    //logout
    async logoutAccount () {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log(error);
        }
    }

    //Current User
    async getCurrentUser () {
        try {
            return await this.account.get();
        } catch (error) {
            console.log(error);
        }
    }
}

const authService = new AuthService();

export default authService;