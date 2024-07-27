import { database } from "@/utils/appwrite";
import { ID } from "appwrite";

interface Props {
    author: string;
    name: string;
    pfp: string | null;
    github: string | null;
    description: string;
    data: string;
    primary__color: string;
    secondary__color: string;
    font__style: string;
    font__weight: string;
    page__style: string;
    stack: string[];
    prompt: string;
}

export const addPost = async ({ data } : { data: Props }) => {

    try {

        let post = await database.createDocument('db', '6691dc57001fe88831c7', ID.unique(), {
            author: data.author,
            likes: 0,
            name: data.name,
            pfp: data.pfp,
            github: data.github,
            description: data.description,
            data: data.data,
            primary__color: data.primary__color,
            secondary__color: data.secondary__color,
            font__style: data.font__style,
            font__weight: data.font__weight,
            page__style: data.page__style,
            stack: data.stack,
            prompt: data.prompt
        });
    
        return {result: 'done', postId: post.$id}

    } catch (error) {

        return {result: error}

    }

}
