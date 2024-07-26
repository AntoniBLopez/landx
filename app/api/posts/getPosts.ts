import { database } from "@/utils/appwrite"

export const getPosts = async () => {

    try {

        let posts = await database.listDocuments('db', '6691dc510030619fb5f9')
        return {result: 'done', total: posts.total, info: posts.documents};

    } catch (error) {

        return {result: error}

    }

}