type CardProps = {
    title: string;
    image: string;
}
export default function CardTec({image, title} : CardProps) {
    return (
        <div className='bg-bgCard h-36 text-white flex flex-col items-center justify-center rounded'>
            <img className='w-20' src={image} alt={title} />
            <h5 className='font-bold mt-2'>{title}</h5>
        </div>
    )
}