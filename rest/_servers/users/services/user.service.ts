import UserDao from '../dao/user.inmemory.dao';
import { DaoService } from '../../common/interfaces/dao.service.interface';
import { CreateUserDto } from '../dto/create.user.dto';
import { PutUserDto } from '../dto/put.user.dto';
import { PatchUserDto } from '../dto/patch.user.dto';

class UserService implements DaoService{
    /* Create */
    async create(resource: CreateUserDto){
        return UserDao.adduser(resource);
    };

    /* Read */
    async list(limit: number, page: number) {
        return UserDao.getUsers();
    };

    async readById(id: string){
        return UserDao.getUserById(id);
    };

    /* Update */
    async putById(id: string, resource: PutUserDto){
        return UserDao.putUserById(id, resource);
    };

    async patchById(id: string, resource: PatchUserDto){
        return UserDao.patchUserById(id, resource);
    };

    /* Delete */
    async deleteById(id: string){
        return UserDao.removeUserById(id);
    };

    /* Validate By Email */
    async getUserByEmail(email: string) {
        return UserDao.getUserByEmail(email);
    };
};

export default new UserService();