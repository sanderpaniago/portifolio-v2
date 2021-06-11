import {Slide} from 'react-awesome-reveal'

type MessageInfoProps = {
    status: 'success' | 'error';
    message: string;
}

export default function MessageInfo({status, message} : MessageInfoProps) {
    return (
        <Slide triggerOnce className="fixed bottom-8 left-5">
            <div id='box' className={`${status === 'error' ? 'bg-red': 'bg-green-500'} w-72 flex items-center px-8 py-2 rounded `}>
                <p className='text-white text-sm'>{message}</p>
            </div>
        </Slide>
    )
}