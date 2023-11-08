import { PortableText } from "@portabletext/react"
import React from 'react';
import { getProject } from '@/sanity/sanity-utils';
import { Image } from "next/dist/client/image-component"

type Props = {
    params: {
        project: string
    }
}

const Project = async ({params}: Props) => {
    const slug = params.project
    const project = await getProject(slug)
    return (
        <div>
            <h2>My project - {project.name}</h2>
            <Image 
                  src={project.image} 
                  alt="random"
                  width={100} 
                  height={100}  
                  ></Image>
            <p className='text-xs px-10'><PortableText value={project.content}></PortableText></p>
        </div>
     );
}

export default Project;
