import projects from "../data/projects";

export async function getServerSideProps(context: any) {
    const projectName = context.params.projectName;
    const project = projects.find(d => d.projectName
    === projectName);
    
    if (!project) return {notFound: true};

    return {
        props: {
            title: project.title,
            description: project.description,
        }
    }

    return {
        props: {
            test: projectName
        }
    }
}

export default function ProjectPage(props: {
    title: string,
    description: string,
}) {
        return (
            <>
             <div id="body">
        <p>{props.title}</p>
        <h1>{props.description}</h1>
        </div>
        </>
        )
    }