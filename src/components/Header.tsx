import { useState } from "react"

export default function Header() {

    const [modalActive, setModalActive] = useState(false)

    function toggleModal() {
        console.log('ola')
        setModalActive(!modalActive)
    }

    return (
        <header className="flex justify-between items-center w-full px-5 pt-8">
            <img className="w-10" src="/logo.svg" alt="" />

            <button onClick={toggleModal} className="md:hidden">
                <img src="/menu.svg" alt="" />
            </button>

            <nav className="hidden md:flex">
                <li className='text-white font-bold uppercase list-none ml-6 border-b-4 border-red'>
                    <a href="#">HOME</a>
                </li>
                <li className='text-white font-bold uppercase list-none ml-6'>
                    <a href="#projetos">Projetos</a>
                </li>
                <li className='text-white font-bold uppercase list-none ml-6'>
                    <a href="#contato">Contato</a>
                </li>
            </nav>

            <nav className={`${modalActive ? 'fixed' : 'hidden'} top-0 left-0 bg-black w-screen h-screen z-20 flex flex-col items-center justify-center gap-y-8`}>
                <li onClick={toggleModal} className='text-white font-bold uppercase list-none text-center text-2xl'>
                    <a href="#">HOME</a>
                </li>
                <li onClick={toggleModal} className='text-white font-bold uppercase list-none text-center text-2xl'>
                    <a href="#projetos">Projetos</a>
                </li>
                <li onClick={toggleModal} className='text-white font-bold uppercase list-none text-center text-2xl'>
                    <a href="#contato">Contato</a>
                </li>

                <button onClick={toggleModal} className='absolute top-5 right-5 text-red font-bold uppercase '>[close]</button>
            </nav>
        </header>
    )
}