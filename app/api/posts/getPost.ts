import { database } from "@/utils/appwrite"

export const getPost = async (postid: string) => {

    try {

        let post = await database.getDocument('db', '6691dc510030619fb5f9', postid)
        return {result: 'done', post: post};

    } catch (error) {

        return {result: error};

    }

}