import { database } from "@/utils/appwrite"
import { Query } from "appwrite";

export const getUserByPost = async (postid: string) => {

    try {

        let post = await database.listDocuments('db', '6691dc510030619fb5f9', [Query.select(["id", postid])])
        let user = await post.documents[0].author
        return {result: 'done', user: user};

    } catch (error) {

        return {result: error}

    }

}