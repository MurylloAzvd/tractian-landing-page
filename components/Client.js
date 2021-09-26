import Image from 'next/image'

export default function Cliente({ icon, name }) {
    return (
        <div className="flex flex-col justify-center items-center border w-52">
            <span className="mt-6">{name}</span>
            <div className="w-36">
                <Image src={icon} />
            </div>
        </div>
    )
}