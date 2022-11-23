export const LinkButtonLightBlue = ({link, name}) => {
    return (
        <div className="border-4 border-sky-600 rounded-2xl p-4 w-full bg-sky-400">
            <a href={link} target="_blank" rel="noreferrer" className="flex text-2xl justify-center text-white" >{name}</a>
        </div>
    );
}

export const LinkButtonBlue = ({link, name}) => {
    return (
        <div className="border-4 border-sky-900 rounded-2xl p-4 w-full bg-sky-600">
            <a href={link} target="_blank" rel="noreferrer" className="flex text-2xl justify-center text-white" >{name}</a>
        </div>
    );
}

export const LinkButtonGreen = ({link, name}) => {
    return (
        <div className="border-4 border-green-900 rounded-2xl p-4 w-full bg-green-600">
            <a href={link} target="_blank" rel="noreferrer" className="flex text-2xl justify-center text-white" >{name}</a>
        </div>
    );
}

export const LinkButtonOrange = ({link, name}) => {
    
    return (
        <div className="border-4 border-orange-900 rounded-2xl p-4 w-full bg-orange-600">
            <a href={link} target="_blank" rel="noreferrer" className="flex text-2xl justify-center text-white" >{name}</a>
        </div>
    );
}

export const LinkButtonTop = ({link, name}) => {
    return (
        <div className="border-4 border-gray-800 rounded-2xl p-4 w-full bg-slate-400">
            <a href={link} target="_blank" rel="noreferrer" className="flex text-2xl justify-center text-white" >{name}</a>
        </div>
    );
}