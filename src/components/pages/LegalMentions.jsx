//import bgimg from '../img/photo/SaintGuilhem14.webp'
import Brand from '../common/Brand'
import Logo from '../common/Logo'
import { Helmet } from 'react-helmet'
import logoclair from '../../assets/img/icons/logoclair.svg'

function LegalMentions() {
    return (
        <div>
            <Helmet>
                <title>Mentions Légales - YouLens</title>
                <link rel="canonical" href="https://youlens.fr/mentions-legales" />
            </Helmet>
            {/*<div className="background">*/}
            {/*    */}
            {/*    <img className="background__img" src={bgimg} alt="Photo Frozen Lake" />*/}
            {/*</div>*/}
            <div className="brand-header">
                <Brand />
                <Logo path='/' logo={logoclair} />
            </div>
            <div className="mentions_legales">
                <div className="mentions_legales__bloc">
                    <h1>Mentions Légales</h1>
                    <p className="mentions_legales__bloc__text">
                        <br/>
                        1. Informations Légales<br/>
                        <br/>
                        Le présent site est édité par Guillaume Court,
                        exerçant sous le statut de micro-entreprise, dont
                        le numéro SIRET est 98438534400010, situé au 73 Allée Kleber, 34000 Montpellier, France.<br/>
                        <br/>
                        2. Contact<br/>
                        <br/>
                        Pour toute question ou demande d’information concernant le site, ou tout signalement
                        de contenu ou d’activités illicites, l’utilisateur peut contacter l’éditeur à l’adresse
                        suivante : youlens.production@gmail.com ou envoyer un courrier à : 73 Allée Kleber, 34000
                        Montpellier,
                        France.<br/>
                        <br/>
                        3. Acceptation des Conditions d’Utilisation<br/>
                        <br/>
                        L’accès et l’utilisation du site sont soumis à l’acceptation et au respect des
                        présentes Mentions Légales.<br/>
                        <br/>
                        4. Gestion des Données et Utilisation des Cookies<br/>
                        <br/>
                        Bien que le site ne collecte pas activement de données personnelles
                        des utilisateurs, la navigation sur le site peut entraîner la mise en
                        cache de certains éléments tels que les images et les vidéos. Cette mise
                        en cache vise à améliorer les performances de chargement lors des visites
                        ultérieures. Aucune donnée personnelle n’est collectée ou traitée au-delà
                        de ce qui est strictement nécessaire pour l’optimisation du chargement du site.<br/>
                        <br/>
                        Les utilisateurs doivent être conscients que cette mise en cache ne relève
                        pas de la collecte de données à caractère personnel au sens du Règlement
                        Général sur la Protection des Données (RGPD) et, par conséquent, les droits
                        d’accès, de rectification, d’effacement, de limitation du traitement,
                        d’opposition et de portabilité ne s’appliquent pas dans ce contexte.<br/>
                        <br/>
                        5. Propriété Intellectuelle<br/>
                        <br/>
                        Tous les contenus présents sur le site de Guillaume Court, incluant, sans limitation,
                        graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que
                        leur mise en forme sont la propriété exclusive de la micro-entreprise à l’exception des
                        marques, logos ou contenus appartenant à d’autres sociétés partenaires ou auteurs.<br/>
                        <br/>
                        6. Limitation de Responsabilité<br/>
                        <br/>
                        Guillaume Court s’efforce d’assurer l’exactitude et la mise à jour des informations
                        diffusées sur ce site. Cependant, il ne garantit pas l’absence de modifications par
                        un tiers. En outre, l’utilisateur admet comprendre que les informations et services
                        proposés peuvent être interrompus en cas de force majeure ou indépendamment de la
                        volonté de Guillaume Court.<br/>
                        <br/>
                        7. Loi Applicable<br/>
                        <br/>
                        Les présentes mentions légales sont régies par la loi française. En cas de litige et à
                        défaut d’accord amiable, le litige sera porté devant les tribunaux français compétents.<br/>
                        <br/>
                        8. Mise à Jour des Mentions Légales<br/>
                        <br/>
                        Guillaume Court se réserve le droit de modifier les termes, conditions et mentions des
                        présentes à tout moment et sans préavis. L’utilisateur est donc invité à les consulter
                        régulièrement.<br/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LegalMentions