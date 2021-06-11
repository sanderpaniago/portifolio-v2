
export default function Header() {
    return (
        <header className="flex justify-between items-center w-full px-5 pt-8">
            <img className="w-10" src="/logo.svg" alt="" />

            <button className="md:hidden">
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
        </header>
    )
}