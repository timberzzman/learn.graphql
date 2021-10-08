import {gql} from "apollo-server";

export const serviceTypeDefs = gql`
    scalar Date
    type User {
        id: ID
        email: String
        password: String
        firstName: String
        lastName: String
    }

    type Post {
        id: ID
        Author: User
        Comments: [Post]
        content: String
        createdAt: Date
        updatedAt: Date
        authorId: String
    }

    type Query {
        post(id: String): Post
        posts: [Post]
    }
    type Mutation {
        register(email: String, password: String, firstName: String, lastName: String): User
        createPost(content: String, authorId: String): Post
        updatePost(id: String, content: String, authorId: String): Post
        deletePost(id: String): Post
        createComment(content: String, authorId: String, postId: String): Post
    }
`;
