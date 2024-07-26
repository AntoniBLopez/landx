import { account, database } from "@/utils/appwrite"

export const removeUser = async (userid: string) => {

    try {

        await account.deleteIdentity(userid)
        return {result: 'done'}

    } catch (error) {

        return {result: error}
        
    }

}