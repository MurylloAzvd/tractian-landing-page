export default function Plan({ tractian }) {
    return (
        <div className={`${tractian ? 'bg-primary text-white' : 'bg-white'} px-8 py-8 rounded-lg shadow-2xl max-w-sm`}>
            <span className="block font-bold">{tractian ? 'TRACTIAN' : 'CONCORRENTES'}</span>
            <span className="block my-6 border-b-2">{tractian ? 'É só fixar o sensor' : 'Mínimo 2 semanas de Setup'}</span>
            <span className="block my-6 border-b-2">{tractian ? 'Pague apenas pelo serviço' : 'Sensores de alto custo'}</span>
            <span className="block my-6 border-b-2">{tractian ? 'Plataforma aprende a cada dia' : 'Plataforma não aprende'}</span>
            <span className="block my-6 border-b-2">{tractian ? 'Usuários Ilimitados' : 'Usuários Limitados'}</span>
        </div>
    )
}