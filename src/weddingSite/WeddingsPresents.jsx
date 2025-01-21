import midho from '../assets/img/photo/midho.jpg'

export default function Presents() {
    return (
            <div className='presents' id='presents'>
                <p className='presents__text'>
                    Je m`appelle Guillaume, je suis vidéaste de mariage.
                    Ma passion pour le monde des images a démarré il y a 6
                    ans lors de mes études de cinéma d`animation 3D.
                    Cette vocation ma mené à Paris pendant deux années,
                    durant lesquelles jai travaillé pour des longs
                    métrages en tant que lighter.<br/>
                    <br/>
                    Le manque de contact humain et l`absence de travail en
                    extérieur m`ont poussé à retourner dans le sud pour
                    développer un nouvel aspect de l`image qui est très vite
                    devenu une passion: la vidéo.<br/>
                    <br/>
                    Le milieu nuptial est vite devenu mon favori dans le large
                    domaine de la vidéo.<br/>
                    <br/>

                    Je suis discret et pointilleux, lors d`une journée de
                    mariage, j`observe, je m`imprègne de votre union pour la
                    restituer au mieux dans un film unique et touchant.<br/>
                    <br/>
                    Ce film est le votre et doit être parfait, c`est pourquoi je
                    m`engage à créer un souvenir qui vous ressemble avec
                    des sons et des images qui sont les vôtres.
                </p>
                <img src={midho} className='presents__img' alt='Photo de Guillaume Court filmant le mariage'/>
            </div>
    )
}
