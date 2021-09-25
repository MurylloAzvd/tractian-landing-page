import Image from 'next/image'
import horimeterIcon from '../public/icon-maintence-horimeter.svg'

export default function Feature() {
    return (
        <div className="px-8 md:px-0">
            <Image src={horimeterIcon} height={120} />
            <h3 className="font-bold text-lg">OpenType features Variable fonts</h3>
            <p className="text-base text-gray-700">Slate helps you see how many more days you need to work to reach your financial goal.</p>
        </div>
    )
}