// "use client"

import { getPages, getProjects } from "@/sanity/sanity-utils"
import { Image } from "next/dist/client/image-component"
import Link from "next/link"

export default async function Home() {
  const projects = await getProjects()
  const pages = await getPages()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <h1 className="text-2xl bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 font-bold bg-clip-text text-transparent">Sanity project!</h1>
      
      <div>
        {pages.map((page) => (
          <p>{page.title}</p>
        ))}
      </div>
      
      <div>
        {projects.map((project) => {
          return (
            <div key={project._id} className="rounded p-4 bg-green-500 mb-2 text-center">
              <p>{project.name}</p>
              {project.image && (
                <Link href={`/projects/${project.slug}`}>
                  <Image 
                  src={project.image} 
                  alt="random"
                  width={100} 
                  height={100}  
                  ></Image>
                </Link>
              )}
            </div>
          )
        })}
      </div>
    </main>
  )
}
