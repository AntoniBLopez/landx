"use client"
import React, { useEffect, useRef, useState } from 'react';
import sdk from '@stackblitz/sdk';
import { BackgroundBeams } from './background-beams';
import { Button } from './button';
import { ArrowBigLeft, Download } from 'lucide-react';
import Link from 'next/link';
import { getPost } from '@/app/api/posts/getPost';
import { getUser } from '@/app/api/users/getUser';
import { LikeHandlerPage } from './LikeHandlerPage';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const createDynamicZipFile = async (post: any) => {
    const zip = new JSZip();

    // Define archivos y su contenido de manera dinámica
    const files = {
        'src/index.html': `<h2>${post.name}</h2>`,
        'index.html': `<h1>${post.description}</h1>`,
        'package.json': `{
    "name": "${post.name.toLowerCase().split(' ').join('-')}",
    "author": "${post.author}",
    "scripts": { "hello": "node index.js", "start": "serve node_modules" },
    "dependencies": { "serve": "^14.0.0" },
    "stackblitz": { "installDependencies": true, "startCommand": "npm start" }
}`
    };

    // Añadir archivos al ZIP
    for (const [fileName, fileContent] of Object.entries(files)) {
        zip.file(fileName, fileContent);
    }

    // Generar el archivo ZIP y descargarlo
    zip.generateAsync({ type: 'blob' }).then((content) => {
        saveAs(content, post.name.toLowerCase().split(' ').join('-')+'-by-'+post.author+'.zip');
    });
};

interface Post {
    $id: string;
    name: string;
    description: string;
    author: string;
    liked: boolean;
    likes: number;
}

const Framer = ({ post }: { post: Post }) => {
    
    const [postState, setPost] = useState<Post | null>(null);

    useEffect(() => {
        if (post) {
            embedProject();
        }
    }, [post]);

    useEffect(() => {
        const fetchPosts = async () => {
            if (!post) return;

            const response = await getPost(post.$id);
            const username = localStorage.getItem("username");
            if (!username) return;

            const user = await getUser(username);
            if (response.result === "done") {
                const updatedPost = {
                    ...post,
                    liked: user?.user?.liked__posts.includes(post.$id) || false
                };
                setPost(updatedPost);
            } else {
                console.error("Error fetching posts:", response.result);
            }
        };
    
        fetchPosts();
    }, [post]);

    const handleDownload = () => {
        createDynamicZipFile(post);
    };

    const embedProject = async () => {
        if (!post) return;

        sdk.embedProject(
            'embed' + post.name.toLowerCase().split(' ').join('-'),
            {
                title: post.name,
                description: post.description,
                template: 'html',
                files: {
                    'src/index.html': `<h2>hpa</h2>`,
                    'index.html': `<h1>Hola</h1>`,
                    'package.json': `{
                        "name": "${post.name.toLowerCase().split(' ').join('-')}",
                        "author": "${post.author}",
                        "scripts": { "hello": "node index.js", "start": "serve node_modules" },
                        "dependencies": { "serve": "^14.0.0" },
                        "stackblitz": { "installDependencies": true, "startCommand": "npm start" }
                    }`
                },
            },
            {
                clickToLoad: false,
                openFile: 'index.html',
                terminalHeight: 50,
                hideNavigation: true,
                height: 500,
                width: 'auto',
                theme: localStorage.getItem('theme') === 'dark' || localStorage.getItem('theme') === 'system' ? 'dark' : 'light'
            },
        );
    };

    return (
        <div>
            <div className='flex mx-auto mb-2 w-fit'>
                <Link href='/dashboard'>
                    <Button className='flex m-1' variant={'outline'}>
                        <ArrowBigLeft className='h-5.5 w-5.5'/>
                    </Button>
                </Link>
                <Button className='flex m-1' onClick={handleDownload} variant={'outline'}>
                    <Download className='h-5 w-5' />
                </Button>
                {postState && (
                    <LikeHandlerPage setPost={setPost} post={postState} />
                )}
            </div>
            <div className='w-[80%] mx-auto rounded-lg overflow-hidden' id={'embed'+(post?.name.toLowerCase().split(' ').join('-') || '')}></div>
            <BackgroundBeams className='z-[-20]' />
        </div>
    );
};

export default Framer;
