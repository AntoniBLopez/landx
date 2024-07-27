import { account } from "@/utils/appwrite"

export const getSession = async (sessionId: string) => {

    try {

        let session = await account.getSession(sessionId)
        return {result: 'done', session: true, sessionInfo: session.userId}

    } catch (error) {

        return {result: error, session: false}

    }

}