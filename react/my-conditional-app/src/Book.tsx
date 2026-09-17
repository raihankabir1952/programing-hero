interface BookProps {
    name: string;
}

export default function Book({name} : BookProps) 
{
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}