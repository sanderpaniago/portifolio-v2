type Project = {
    title: string;
    description: string;
    image: string;
    linkRepository: string;
    linkDemo: string;
}

type CardProps = {
    project: Project;
    active?: boolean;
}
export default function CardProject({ project, active }: CardProps) {
    return (
        <article className={`bg-bgCard w-full ${active ? 'h-96' : 'h-80 mt-10'} ease-in duration-300 p-4 py-6 rounded text-white`}>
            <img className="h-2/5 w-full object-cover" src={project.image} alt={project.title} />
            <div className="h-2/4 flex flex-col items-center mt-6">
                <h4 className="font-bold text-xl text-center">{project.title}</h4>
                <p className="mt-2 mb-6 inline-block text-center h-28 overflow-ellipsis overflow-hidden">{project.description}</p>
                <div className="flex items-center justify-between gap-x-2.5" >
                    <a href={project.linkRepository} target="_blank" className="h-12 -mb-4 bg-black rounded text-center px-4 text-xs w-6/12 flex items-center justify-center">Acessar Repositório</a>
                    <a href={project.linkDemo} target="_blank" className="h-12 -mb-4 bg-red rounded px-4 text-sm w-6/12 flex items-center justify-center">Acessar demo</a>
                </div>
            </div>

        </article>
    )
}