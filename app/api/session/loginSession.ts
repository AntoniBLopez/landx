import { account } from "@/utils/appwrite"

export const loginSession = async (email: string, password: string) => {

    try {

        let createdSession = await account.createEmailPasswordSession(email, password)
        let session = await account.getSession(createdSession.$id);
        if(session)
            return {result: 'done', info: session.$id, user: session.userId}

    } catch (error) {

        return {result: error}

    }

}