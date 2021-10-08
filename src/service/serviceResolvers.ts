import {dateScalar} from '../dateScalar';
import {PrismaClient} from '@prisma/client';
import {v4 as uuidv4} from 'uuid';

const prisma = new PrismaClient();

export const serviceResolvers = {
    Date: dateScalar,
    Query: {
        posts: async () => {
            return prisma.post.findMany({include: {Author: true, Comments: true}})
        },
        // @ts-ignore
        post: async (_: any, data) => {
            return prisma.post.findUnique({where: data, include: {Author: true, Comments: true}})
        },
    },
    Mutation: {
        // @ts-ignore
        register: async (_: any, data) => {
            data.id = uuidv4();
            return prisma.user.create({data});
        },
        // @ts-ignore
        createPost: async (_: any, data) => {
            const { authorId, content } = data;
            return prisma.post.create({
                data:
                    {
                        id: uuidv4(),
                        content,
                        Author: {
                        connect: {id: authorId}}
                    },
                include: {Author: true}
            });
        },
        // @ts-ignore
        updatePost: async (_: any, data) => {
            return prisma.post.update(
                {
                    where: {id: data.id},
                    data: data,
                }
            )
        },
        // @ts-ignore
        deletePost: async (_: any, data) => {
            return prisma.post.delete(
                {
                    where: {id: data.id}
                }
            )
        },
        // @ts-ignore
        createComment: async (_: any, data) => {
            const { authorId, content, postId } = data;
            return prisma.post.create({
                data:
                    {
                        id: uuidv4(),
                        content,
                        Author: {
                            connect: {id: authorId}
                        },
                        Post: {
                            connect: {id: postId}
                        }
                    },
                include: {Author: true}
            });
        }
    }
}