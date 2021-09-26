import Image from 'next/image'

export default function Feature({ icon, title, subTitle }) {
    return (
        <div className="px-8 md:px-0">
            <Image src={icon} height={160} />
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-base text-gray-700">{subTitle}</p>
        </div>
    )
}