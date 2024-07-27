import { database } from "@/utils/appwrite"

export const getPost = async (postid: string) => {

    try {

        let post = await database.getDocument('db', '6691dc57001fe88831c7', postid)
        return {result: 'done', post: post};

    } catch (error) {

        return {result: error};

    }

}