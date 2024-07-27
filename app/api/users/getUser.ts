import { database } from "@/utils/appwrite"

export const getUser = async (userid: string) => {

    try {

        let user = await database.getDocument('db', '6691dc510030619fb5f9', userid)
        return {result: 'done', user: user}

    } catch (error) {

        return {result: error}

    }

}