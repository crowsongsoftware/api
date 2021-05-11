import { gql } from 'apollo-server-express';

const typeDefs = gql`
type Query {
        id: string,
        name: string,
        prepTime: string,
        cookTime: string,
        totalTime: string,
        servings: string,
        yield: string,
        description: string,
        ingredients: Array<string>,
        directions: Array<string>,
        nutrionalInformation: Array<string>
    }
  `;

export default typeDefs;