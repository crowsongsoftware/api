import {CommonRoutesConfig} from '../../common/common.routes.config';
import UserController from '../controllers/user.controller';
import UserMiddleware from '../middleware/user.middleware';
import express from 'express';

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    };

    configureRoutes(){
        this._app
        .param(`id`, UserMiddleware.extractUserId);
        
        this._app
            .route('/users')
            .get(UserController.listUsers)
            .post(
                UserMiddleware.validateRequiredFields,
                UserMiddleware.validateSameEmailDoesntExist,
                UserController.createUser
            );

        this._app
            .route(`/users/:id`)
            .all(UserMiddleware.validateUserExists)
            .get(UserController.getUserById)
            .delete(UserController.removeUser);    

        this._app
            .put(`/users/:id`, [
                UserMiddleware.validateRequiredFields,
                UserMiddleware.validateSameEmailBelongToSameUser,
                UserController.put
            ]);

        this._app
            .patch(`/users/:id`, [
                UserMiddleware.validatePatchEmail,
                UserController.patch,
            ]);

        return this._app;
    };
};