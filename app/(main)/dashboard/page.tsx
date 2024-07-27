/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-extra-non-null-assertion */
"use client";
import { useEffect, useState } from "react";
import { getPosts } from "@/app/api/posts/getPosts";
import { BackgroundBeams } from "@/components/ui/background-beams";
import RelativeTimeConverter from "@/components/time-convert";
import { getUser } from "@/app/api/users/getUser";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Canva } from "@/components/ui/canva";
import { LikeHandler } from "@/components/ui/LikeHandler";
import FramerCanva from "@/components/ui/FramerCanva";
import { getPost } from "@/app/api/posts/getPost";

const POSTS_PER_PAGE = 3;

export default function Page() {
  const [posts, setPosts] = useState<any>([]);
  const [hold, setHold] = useState<string>('');
  const [holdPost, setPostHold] = useState<any>(null);
  const [page, setPage] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function truncateText(text: string, maxLength: number) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength - 3) + " ...";
  }

  useEffect(() => {
    async function fetchPost() {
      if (hold) {
        const post = await getPost(hold);
        setPostHold(post!!.post);
      }
    }
    fetchPost();
  }, [hold]);

  useEffect(() => {
    if(!localStorage.getItem('page')) {
      localStorage.setItem('page', '0')
    }

    const fetchPosts = async () => {
      setIsLoading(true);
      const response = await getPosts("newest", POSTS_PER_PAGE * page);
      const user = await getUser(localStorage.getItem("username")!!);
      if (response.result === "done") {
        setTotal(response?.total!!);
        const postsWithLikes = response?.info?.map((post: any) => ({
          ...post,
          liked: user?.user?.liked__posts.includes(post.$id),
        }));
        setPosts(postsWithLikes);
      } else {
        console.error("Error fetching posts:", response.result);
      }
      setIsLoading(false);
    };

    fetchPosts();
  }, [page]);

  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  return (
    <main className="mt-28 mx-8">
      <h1 className="text-center outlinedLabel text-transparent shadow-white">Dashboard.</h1>
      <h2 style={{ letterSpacing: "2px" }} className="text-center text-2xl font-light py-5">
        Explore our users art.
      </h2>
      {isLoading ? (
        <div className="text-center">
          <svg className="animate-spin h-8 w-8 text-gray-500 mx-auto my-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
        </div>
      ) : (
        <>
          {posts.length ? (
            <div className="flex flex-col">
              <div className="flex justify-center text-center mb-2">
                <button
                  onClick={(e) => {
                    if (page > 0) {
                      setPage((prev) => prev - 1);
                      localStorage.setItem("page", (page - 1).toString());
                    }
                  }}
                  className={`bg-black/5 disabled:text-black/10 dark:disabled:text-white/50 dark:bg-gray-300/10 dark:disabled:bg-gray-300/5 h-7 w-7 rounded-full my-auto ${page <= 0 ? "cursor-not-allowed opacity-50" : ""}`}
                  disabled={page <= 0}
                >
                  {"<"}
                </button>
                <span className="p-2 my-auto">page {page + 1}</span>
                <button
                  onClick={(e) => {
                    if (page < totalPages - 1) {
                      setPage((prev) => prev + 1);
                      localStorage.setItem("page", (page + 1).toString());
                    }
                  }}
                  className={`bg-black/5 disabled:text-black/10 dark:disabled:text-white/50 dark:bg-gray-300/10 dark:disabled:bg-gray-300/5 h-7 w-7 rounded-full my-auto ${page >= totalPages - 1 ? "cursor-not-allowed opacity-50" : ""}`}
                  disabled={page >= totalPages - 1}
                >
                  {">"}
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 w-fit mx-auto justify-center items-center">
                {posts.map((post: any) => (
                  <div
                    onMouseEnter={() => setHold(post.$id)}
                    className="bg-black/5 dark:bg-white/5 w-80 flex flex-col rounded-md"
                    key={post.$id}
                  >
                    <div className="pb-2">
                      <div className="flex px-1 m-0 justify-between">
                        <div onClick={() => { window.location.assign("/user/" + post.author); }} className="flex p-1 group-hover:p-1.5 transition-all">
                          <img className="cursor-pointer h-8 w-8 rounded-full p-1" src={post?.pfp ?? "/unknown.png"} alt="User profile picture" />
                          <h2 className="cursor-pointer hover:underline my-auto p-1">{post.author}</h2>
                          <h2 className="text-gray-500 text-sm text-right my-auto"> · <RelativeTimeConverter isoDate={post.$createdAt} /></h2>
                        </div>
                        <div className="flex p-2">
                          <LikeHandler setPosts={setPosts} post={post}></LikeHandler>
                        </div>
                      </div>
                      <div className="p-0 m-0 group">
                        <div onClick={() => { window.location.assign("/land/" + post.$id); }} className="px-2 cursor-pointer">
                          <div className="relative">
                            <div className="flex absolute top-2 right-1.5 z-10">
                              {post.stack.map((stack: any) => (
                                <Tooltip.Provider key={stack}>
                                  <Tooltip.Root>
                                    <Tooltip.Trigger>
                                      <img className="w-6 h-6 hover:w-7 hover:h-7 transition-all mr-1" src={`https://skillicons.dev/icons?i=${stack}`} alt={`${stack} icon`} />
                                    </Tooltip.Trigger>
                                    <Tooltip.Portal>
                                      <Tooltip.Content side="bottom">
                                        <Tooltip.Arrow className="opacity-40" />
                                        <span className="bg-black/40 text-white m-1 p-[0.17em] px-2 rounded-lg">{stack}</span>
                                      </Tooltip.Content>
                                    </Tooltip.Portal>
                                  </Tooltip.Root>
                                </Tooltip.Provider>
                              ))}
                            </div>
                            <Canva post={post}></Canva>
                          </div>
                          <h2 className="group-hover:mt-1 mt-[-2em] font-black transition-all mix-blend-difference text-white text-lg px-2.5 w-full overflow-hidden whitespace-nowrap group-hover:font-normal">
                            {truncateText(post.name, 27)}
                          </h2>
                        </div>
                        <div className="h-0 group-hover:h-10 transition-all px-2 mb-1.5 group-hover:mb-[-0.6em] overflow-hidden">
                          <h3 className="text-xs text-gray-500 px-2.5 p-0">{post.description}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {holdPost && (
                <div className="w-full">
                  <FramerCanva post={holdPost}></FramerCanva>
                </div>
              )}
            </div>
          ) : (
            <h3 className="text-center">No landing pages were found...</h3>
          )}
        </>
      )}
      <BackgroundBeams className="z-[-90]"></BackgroundBeams>
    </main>
  );
}
