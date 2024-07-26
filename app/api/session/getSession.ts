import { account } from "@/utils/appwrite"

export const getSession = async (sessionId: string) => {

    try {

        await account.getSession(sessionId)
        return {result: 'done', session: true}

    } catch (error) {

        return {result: error, session: false}

    }

}