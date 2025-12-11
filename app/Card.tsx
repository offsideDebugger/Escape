export default function Card({title,content}: {title: string, content: string}) {
    return (
        <div className="border sm:w-xl md:w-3xl lg:w-4xl  border-neutral-900 hover:translate-y-0.5 transition duration-200 bg-cards p-4 rounded-lg shadow-md cursor-pointer shadow-accent/20 hover:shadow-accent/40">
            <div className="flex justify-between">
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-2 flex items-center justify-center">{title}</h2>
             <span className="text-accent font-bold text-xl p-2 mr-4 md:mr-6 lg:mr-10 flex items-center justify-center ">&#9674;</span>
            </div>
            <p className="text-muted text-[12px] md:text-sm max-w-lg md:max-w-2xl ">{content}</p>
        </div>
    );
}