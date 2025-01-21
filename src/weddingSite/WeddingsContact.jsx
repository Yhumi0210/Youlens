import { useState } from 'react'
import AutoCloseModal from '../components/autoCloseModal/AutoCloseModal'

export default function WeddingsContact() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [formData, setFormData] = useState({
        firstname: '',
        email: '',
        phone: '',
        date: '',
        location: '',
        me: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const validateForm = () => {
        // Expression régulière pour vérifier le format de l'email
        const emailRegex = /^[0-9a-z.-]+@[0-9a-z]+\.[a-z]+$/

        if (!formData.firstname || !formData.email || !formData.date || !formData.location || !formData.message) {
            setErrorMessage("Veuillez remplir tous les champs obligatoires marqués d'un *.")
            return false
        }

        if (!emailRegex.test(formData.email)) {
            setErrorMessage("Veuillez entrer une adresse e-mail valide.")
            return false
        }

        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Vérifie les champs requis et le format de l'email
        if (!validateForm()) {
            openErrorModal()
            return
        }

        // Envoi des données du formulaire au backend pour envoyer l'e-mail
        try {
            const response = await fetch('https://backendyoulens.vercel.app/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                // Télécharge le PDF après la soumission
                try {
                    const link = document.createElement('a')
                    link.href = '/Guillaume_Court_WeddingFIlms_2024_2025.pdf'
                    link.download = 'Guillaume_Court_WeddingFIlms_2024_2025.pdf'
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                } catch (error) {
                    console.error('Erreur lors du téléchargement du fichier :', error)
                }

                openModal()
                console.log('Merci pour votre message! Vous allez télécharger un pdf contenant toutes les informations utiles.')
            } else {
                openErrorModal()
                console.error('Erreur lors de l\'envoi de l\'e-mail, veuillez réessayer.')
            }
        } catch (error) {
            console.error('Erreur:', error)
            openErrorModal()
        }
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const openErrorModal = () => {
        setIsErrorModalOpen(true)
    }

    const closeErrorModal = () => {
        setIsErrorModalOpen(false)
    }

    return (
        <section id='contact-form' className='contact'>
            <h2 className='contact__title'>COMMENCONS</h2>
            <div className='contact__form'>
                <p className='contact__form__text'>
                    <span className='contact__form__text__me'>je me déplace...</span>
                    Tant qu`il y a une belle histoire à raconter, n`hésitez pas à me faire part de vos idées si vous êtes inspirés. Tout est possible en vidéo, la seule limite est celle de votre imagination.
                    <br/><br/>
                    Ou bien laissez moi vous contacter pour discuter ensemble de votre union à venir.
                    <br/><br/>
                    Je vous réponds dans les 24 heures. Vous pouvez également me joindre quand vous le souhaitez, je vous répondrai avec plaisir.
                </p>
                <form onSubmit={handleSubmit} className='contact__form__input'>
                    <label htmlFor='firstname'>Prénoms *</label>
                    <input type='text' name='firstname' value={formData.firstname} onChange={handleChange} required/>
                    <label htmlFor='email'>E-mail *</label>
                    <input type='email' name='email' value={formData.email} onChange={handleChange} required/>
                    <label htmlFor='phone'>Téléphone</label>
                    <input type='tel' name='phone' value={formData.phone} onChange={handleChange}/>
                    <label htmlFor='date'>Date du projet *</label>
                    <input type='date' name='date' value={formData.date} onChange={handleChange} required/>
                    <label htmlFor='location'>Lieu de réception *</label>
                    <input type='text' name='location' value={formData.location} onChange={handleChange} required/>
                    <label htmlFor='me'>Comment avez-vous entendu parler de moi ?</label>
                    <textarea name='me' value={formData.me} onChange={handleChange} className='textarea-me'></textarea>
                    <label htmlFor='message'>Message *</label>
                    <textarea name='message' value={formData.message} onChange={handleChange} required></textarea>
                    <button type='submit'>Envoyer</button>

                    {/* Success Modal */}
                    <AutoCloseModal isOpen={isModalOpen} onClose={closeModal} autoCloseTime={3500}>
                        <h2 className='modal'>Merci pour votre message! <br/>Vous allez pouvoir télécharger un fichier pdf contenant toutes les informations utiles.</h2>
                    </AutoCloseModal>

                    {/* Error Modal */}
                    <AutoCloseModal isOpen={isErrorModalOpen} onClose={closeErrorModal} autoCloseTime={2000}>
                        <h2 className='modal'>{errorMessage || "Erreur lors de l'envoi de l'e-mail, veuillez réessayer."}</h2>
                    </AutoCloseModal>
                </form>
            </div>
            <div className='ref'>
                Vous rêvez d’immortaliser le jour de votre mariage avec des images à couper le souffle ? En tant que
                vidéaste de mariage basé dans le sud de la France, je mets tout en œuvre pour capturer les moments les
                plus précieux de votre union. Que ce soit pour une cérémonie intime ou un grand événement, je propose
                des services de vidéo de mariage sur mesure, adaptés à vos attentes et votre personnalité. Je suis
                également disponible pour réaliser des films de mariage à l’étranger, ayant déjà eu le plaisir de
                capturer des unions en dehors de la France.
                <br/><br/>
                Mon approche artistique combine discrétion et sensibilité, afin de saisir chaque sourire, chaque regard
                complice et chaque détail qui rend votre histoire unique. En plus de capturer chaque instant au sol,
                j’utilise également un drone pour des plans aériens qui révèlent toute la beauté de vos lieux de
                réception et de cérémonie. Grâce à cette technologie, votre film de mariage bénéficie de perspectives
                époustouflantes qui enrichissent l’émotion et l’authenticité de votre journée. Je vous accompagne dès
                les préparatifs jusqu’à la fin de votre soirée, pour un film de mariage complet qui raconte votre
                journée de manière authentique et émotive.
                <br/><br/>
                Pour les futurs mariés qui souhaitent un souvenir inoubliable, je mets à disposition différents forfaits
                et options personnalisables, afin de répondre au mieux à vos envies et votre budget. Contactez-moi dès
                aujourd’hui pour discuter de votre projet, visionner mes réalisations, et découvrir comment nous
                pourrons créer ensemble un film de mariage qui vous ressemble. Que vous soyez dans le sud de la France,
                ailleurs dans le pays ou à l’étranger, je me déplace pour capturer votre amour en images.
            </div>
        </section>
    )
}
