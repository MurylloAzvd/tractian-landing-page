import Image from 'next/image'
import logoElectrolux from '../public/logo-electrolux.png'

export default function Cliente() {
    return (
        <div className="flex flex-col justify-center items-center border w-52">
            <span className="mt-6">Electrolux</span>
            <div className="w-36">
                <Image src={logoElectrolux} />
            </div>
        </div>
    )
}