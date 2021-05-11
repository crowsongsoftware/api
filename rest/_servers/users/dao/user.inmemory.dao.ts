import userInMemoryDb from '../db/user.inmemory.db';
import { CreateUserDto } from '../dto/create.user.dto';
import { PatchUserDto } from '../dto/patch.user.dto';
import { PutUserDto } from '../dto/put.user.dto';
import shortid from 'shortid';
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

class UserInMemoryDao {
    constructor() {
        log('Created new instance of UsersInMemoryDao');
    };

    /* Create */
    /**********/
    async adduser(user: CreateUserDto){
        user.id = shortid.generate();
        userInMemoryDb.users.push(user);

        return user.id;
    };

    /* Read */
    /********/
    async getUsers(){
        return userInMemoryDb.users;
    };

    async getUserById(id: string){
        return userInMemoryDb.users.find((user: {id: string}) => user.id === id );
    };

    /* Update */
    /**********/
    async putUserById(id: string, user: PutUserDto) {
        const objIndex = userInMemoryDb.users.findIndex(
            (obj: { id: string }) => obj.id === id
        );
        userInMemoryDb.users.splice(objIndex, 1, user);
        return `${user.id} updated via put`;
    };

    async patchUserById(id: string, user: PatchUserDto) {
        const objIndex = userInMemoryDb.users.findIndex(
            (obj: { id: string }) => obj.id === id
        );
        let currentUser = userInMemoryDb.users[objIndex];
        const allowedPatchFields = [
            'password',
            'firstName',
            'lastName',
            'permissionLevel',
        ];
        for (let field of allowedPatchFields) {
            if (field in user) {
                // @ts-ignore
                currentUser[field] = user[field];
            }
        }
        userInMemoryDb.users.splice(objIndex, 1, currentUser);
        return `${user.id} patched`;
    };

    /* Delete */
    /**********/
    async removeUserById(id: string) {
        const objIndex = userInMemoryDb.users.findIndex(
            (obj: { id: string }) => obj.id === id
        );
        userInMemoryDb.users.splice(objIndex, 1);
        return `${id} removed`;
    };

    /* Validation */
    /**************/
    async getUserByEmail(email: string) {
        const objIndex = userInMemoryDb.users.findIndex(
            (obj: { email: string }) => obj.email === email
        );
        let currentUser = userInMemoryDb.users[objIndex];
        if (currentUser) {
            return currentUser;
        } else {
            return null;
        }
    };
};

export default new UserInMemoryDao();