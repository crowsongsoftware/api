import { CreateUserDto } from "../dto/create.user.dto";

class userInMemoryDb {
    users: Array<CreateUserDto> = [
        {
            "id": "001",
            "firstName": "Fred",
            "lastName": "Flintstone",
            "email": "fredflintone@bedrock.com",
            "password": "fr123fl"
        },
        {
            "id": "002",
            "firstName": "Wilma",
            "lastName": "Flintstone",
            "email": "wilmaflintone@bedrock.com",
            "password": "wi123fl"
        },
        {
            "id": "003",
            "firstName": "Barney",
            "lastName": "Rubble",
            "email": "barneyrubble@bedrock.com",
            "password": "ba123ru"
        },
        {
            "id": "004",
            "firstName": "Betty",
            "lastName": "Rubble",
            "email": "bettyrubble@bedrock.com",
            "password": "be123ru"
        }
    ];
};

export default new userInMemoryDb;