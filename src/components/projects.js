import {CodeBracketIcon} from '@heroicons/react/24/outline';
import React from "react";
import {projects} from "../data";

export default function Projects() {
    return(
        <section id="projects">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w--full mb-20">
                    <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
                        App's I've built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        I've worked on numerous apps ranging from interactive games, recipe search apps, Budget planner app, movie database, etc.
                    </p>
                </div>
                <div className="md:flex md:flex-wrap">
                    {projects.map((project, id) => (
                        <a
                            href="bharath-portfolio-job.netlify.app"
                            key={project.image}
                            className="sm:w-1/2 w-100 px-4 py-8">
                            <div className="flex relative">
                                <img 
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={project.image}
                                    style={(id === 0 || id === 1) ? {height: "120%"} : {height : "105%"}}
                                />
                                <div className="py-10 relative z-0 w-full border-gray-800 border-gray-900 opacity-0 hover:opacity-100">
                                    <h2 className={`tracking-widest text-lg title-font font-medium ${id === 2 ? 'text-black-600' : 'text-blue-400'} mb-1`}>
                                        {project.subtitle}
                                    </h2>
                                    <h1 className={"title-font text-lg font-medium text-black-200 mb-3"}>
                                        {project.title}                               
                                    </h1>
                                    <p className="leading-relaxed mb-3 text-black-200">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}