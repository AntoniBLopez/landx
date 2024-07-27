"use client"
import React, { useEffect, useState } from 'react';
import sdk from '@stackblitz/sdk';
import { BackgroundBeams } from './background-beams';

const FramerCanva = ({ post }: { post: any }) => {

    const [error, setError] = useState<unknown>(null)

    useEffect(() => {
        embedProject();
    }, [post]);

    const embedProject = async () => {
        
        try {
            sdk.embedProject(
                'embed',
                {
                    title: post.name,
                    description: post.description,
                    template: 'html',
                    files: {
'src/index.html': `<h2>hpa</h2>`,
'index.html': `<h1>Hola</h1>`,
'package.json': `{
    "name": "my-project",
    "author": "${post.author}",
    "scripts": { "hello": "node index.js", "start": "serve node_modules" },
    "dependencies": { "serve": "^14.0.0" },
    "stackblitz": { "installDependencies": true, "startCommand": "npm start" }
}`,
                    },
                },
                {
                    view: 'preview',
                    hideExplorer: true,
                    hideDevTools: true,
                    showSidebar: false,
                    hideNavigation: true,
                    clickToLoad: false,
                    openFile: 'index.html',
                    height: 400,
                    width: 'auto',
                    theme: localStorage.getItem('theme') === 'dark' || localStorage.getItem('theme') === 'system' ? 'dark' : 'light'
                },
            );
            setError(null)
        } catch (error) {
            setError(error)
        }
        
    };

    return (
        <div className='w-full'>
            <div className='mx-auto w-[100%] m-4 rounded-md overflow-hidden' id="embed"></div>
            <BackgroundBeams className='z-[-20]'></BackgroundBeams>
        </div>
    );

};

export default FramerCanva;
