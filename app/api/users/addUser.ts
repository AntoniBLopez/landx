import { account, database } from "@/utils/appwrite"
import { loginSession } from "../session/loginSession"

export const addUser = async ({ name, email, password } : { name: string, email: string, password: string}) => {

    try {

        let user = await account.create(name.toLowerCase(), email, password, name)
        await database.createDocument('db', '6691dc510030619fb5f9', name.toLowerCase(), {
            pfp: '',
            github: '',
            followers: []
        })
        
        let session = await loginSession(user.email, user.password!!)
        let verify = await account.getSession(session?.info!!)
        if(verify.$id)
        {
            return {result: 'done', sessionId: verify.$id, user: verify.userId}
        }

    } catch (error) {

        return {result: error}

    }

}