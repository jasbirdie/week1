export default function Project(props: {
    title: string,
    description: string}
) {

    console.log(1 +2);

    return (
        
        <div>
        <p>{props.title}</p>
        <h1>{props.description}</h1>
        </div>
    )
}