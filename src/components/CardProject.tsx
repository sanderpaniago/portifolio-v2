type Project = {
    name: string;
    description: string;
    image: string;
    linkRep: string;
    linkDemo: string;
}

type CardProps = {
    project: Project;
    active?: boolean;
}
export default function CardProject({project, active}: CardProps) {
    return (
        <article className={`bg-bgCard w-full ${active ? 'h-96' : 'h-80 mt-10'} ease-in duration-300 p-4 py-6 rounded text-white`}>
            <img className="h-2/5 w-full object-cover" src={project.image} alt={project.name} />
            <div className="h-2/4 flex flex-col items-center mt-6">
                <h4 className="font-bold text-xl text-center">{project.name}</h4>
                <p className="mt-2 mb-6 inline-block text-center h-28 overflow-ellipsis overflow-hidden">{project.description}</p>
                <a href={project.linkDemo} target="_blank" className="h-12 -mb-4 bg-red rounded px-4 flex items-center justify-center">Acessar demo</a>
            </div>

        </article>
    )
}