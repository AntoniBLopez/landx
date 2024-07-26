import { account } from "@/utils/appwrite"

export const logoutSession = async (sessionId: string) => {

    try {

        await account.deleteSession(sessionId)
        localStorage.removeItem('session')
        localStorage.removeItem('username')
        return {result: 'done', info: 'logged out successfuly'}

    } catch (error) {

        return {result: error}

    }

}