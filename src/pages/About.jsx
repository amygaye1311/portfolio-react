import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-8 py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        
        {/* Colonne gauche - Photo */}
        <div className="flex items-center justify-center">
          <img
            src="/Maphoto.jpeg" // ✅ place ta photo dans /public
            alt="Amy Gaye"
            className="rounded-lg shadow-lg object-cover w-full h-full max-h-[600px]"
          />
        </div>

        {/* Colonne droite - À propos */}
        <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 font-serif">À propos de moi</h2>
          <p className="text-sm text-gray-300 leading-relaxed font-light">
            Je m’appelle <span className="text-blue-400 font-semibold">Amy Gaye</span>, passionnée par le développement web et les nouvelles technologies. 
            Actuellement en formation dans le domaine de l’informatique à Univers Professionnel (UNIPRO), je développe progressivement mes compétences en programmation et en conception d’applications web modernes.
            <br /><br />
            Curieuse et déterminée, j’aime comprendre comment les technologies fonctionnent et transformer des idées en projets concrets. 
            Au fil de mon apprentissage, j’ai travaillé sur plusieurs projets utilisant HTML, CSS, JavaScript, Python et React, ainsi que des outils modernes comme Tailwind CSS et React Router pour créer des interfaces dynamiques et intuitives.
            <br /><br />
            Ce qui me motive le plus dans le développement web, c’est la possibilité de créer des expériences utiles et accessibles pour les utilisateurs. 
            Chaque projet est pour moi une occasion d’apprendre, d’expérimenter et d’améliorer ma façon de concevoir des solutions.
            <br /><br />
            Actuellement, je continue de me perfectionner à travers des projets personnels et je suis entrain de faire un stage à l'entreprise GATS, avec l’objectif de devenir une développeuse web compétente capable de contribuer à des projets innovants.
            <br /><br />
            En dehors du code, j’apprécie découvrir de nouvelles idées, apprendre constamment et relever de nouveaux défis.
          </p>

          {/* Bouton CV */}
          <div className="mt-6">
            <a
              href="/CV_AmyGaye.pdf" // ✅ place ton fichier CV dans /public
              download
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 text-sm"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;