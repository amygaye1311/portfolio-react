import { motion } from "framer-motion";

function Home() {
  return (
    <motion.section
      className="flex h-screen bg-black text-white"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Colonne gauche avec photo */}
      <div className="w-1/2 h-full">
        <img
          src="/Profil.jpeg"
          alt="Amy Gaye"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Colonne droite avec infos */}
      <div className="w-1/2 flex flex-col items-center justify-center p-12 text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Bonjour, je suis <span className="text-blue-400">Amy Gaye</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Développeuse Web en formation
          
          Passionnée par le développement Web, je crée des interfaces modernes et interactives avec React et JavaScript.
          J'aime apprendre de nouvelles technologies et transformer des idées en projets réels.<br />
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