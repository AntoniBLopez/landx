import { database } from "@/utils/appwrite";
import { Query } from "appwrite";

export const getPosts = async (type: string, offset: number) => {
  try {
    let total = (await database.listDocuments("db", "6691dc57001fe88831c7")).total;
    if (offset > Number(total)) {
      return { result: "done", total: Number(total) };
    } else {
      let posts = await database.listDocuments("db", "6691dc57001fe88831c7", [Query.limit(3), Query.offset(offset)]);
      return { result: "done", info: posts.documents, total: Number(total) };
    }
  } catch (error) {
    return { result: error };
  }
};