import { motion } from "framer-motion";

function Home() {
  return (
    <motion.section
      // Ajout de flex-col pour empiler par défaut, md:flex-row pour le desktop
      // h-screen peut devenir gênant sur mobile, j'ai mis min-h-screen
      className="flex flex-col md:flex-row min-h-screen bg-black text-white"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Colonne gauche (Photo) : w-full sur mobile, w-1/2 sur desktop */}
      <div className="w-full md:w-1/2 h-[400px] md:h-screen">
        <img
          src="/Profil.jpeg"
          alt="Amy Gaye"
          className="w-full h-full object-cover md:object-contain"
        />
      </div>

      {/* Colonne droite (Infos) : w-full sur mobile, w-1/2 sur desktop */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
          Bonjour, je suis <span className="text-blue-400">Amy Gaye</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Développeuse Web en formation.
          <br /><br />
          Passionnée par le développement Web, je crée des interfaces modernes et interactives avec React et JavaScript. 
          J'aime apprendre de nouvelles technologies et transformer des idées en projets réels.
          <br /><br />
          Contactez-moi si vous avez besoin de mes services.
        </p>
        <a
          href="/contact"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Me Contacter
        </a>
      </div>
    </motion.section>
  );
}

export default Home;