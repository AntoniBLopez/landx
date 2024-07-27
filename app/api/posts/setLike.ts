import { database } from "@/utils/appwrite";

export const setLike = async (type: boolean, postid: string, userid: string) => {
    try {
        // USERLIKE UPDATE
        let user = await database.getDocument('db', '6691dc510030619fb5f9', userid);
        let userLikes = user.liked__posts;

        if (type) {
            // ADD LIKE
            userLikes.push(postid);
        } else {
            // REMOVE LIKE
            userLikes = userLikes.filter((like: string) => like !== postid);
        }

        await database.updateDocument('db', '6691dc510030619fb5f9', userid, {
            liked__posts: userLikes
        });

        // POSTLIKE UPDATE
        let post = await database.getDocument('db', '6691dc57001fe88831c7', postid);
        let postLikes = Number(post.likes);

        if (type) {
            postLikes += 1;
        } else {
            postLikes -= 1;
        }

        await database.updateDocument('db', '6691dc57001fe88831c7', postid, {
            likes: postLikes
        });

        return { result: 'done', info: userLikes };
    } catch (error) {
        return { result: error };
    }
}