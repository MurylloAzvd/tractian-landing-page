export default function Plan() {

    return (
        <div className="bg-white px-8 py-8 rounded-lg shadow-2xl my-6">
            <span className="block font-bold">FREE</span>
            <span className="block px-8 text-base text-gray-700">Organize across all apps by hand</span>
            <div className="my-8 grid grid-cols-2 items-center gap-x-2">
                <span className="row-span-2 text-right font-bold text-6xl">0</span>
                <span className="text-left font-bold text-2xl">$</span>
                <span className="text-left">Per Month</span>
            </div>
            <span className="block my-6">Pricing Feature</span>
            <span className="block my-6">Pricing Feature</span>
            <span className="block my-6">Pricing Feature</span>
            <span className="block my-6">Pricing Feature</span>
            <span className="block my-6">Pricing Feature</span>
            <button className="w-full text-lg text-center bg-primary text-white py-2 px-12 rounded-full">Order Now</button>
        </div>
    )
}