import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import Counter from "../components/Counter";
import ControlledForm from "../components/ControlledForm";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "Calculatrice Web",
      description: "Application web permettant d’effectuer des opérations mathématiques de base avec une interface simple et intuitive.",
      technologies: "HTML, CSS, JavaScript"
    },
    {
      title: "Calcul de Factorielle",
      description: "Programme permettant de calculer la factorielle d’un nombre saisi par l’utilisateur.",
      technologies: "JavaScript"
    },
    {
      title: "Test de Nombre Premier",
      description: "Application qui vérifie si un nombre donné est premier ou non.",
      technologies: "JavaScript"
    },
    {
      title: "Jeu de Hasard",
      description: "Petit jeu interactif où l’utilisateur doit deviner un nombre aléatoire avec un nombre limité d’essais.",
      technologies: "JavaScript"
    },
    {
      title: "Portfolio Personnel",
      description: "Portfolio moderne développé pour présenter mes compétences, mes technologies et mes projets.",
      technologies: "React, Tailwind CSS, React Router"
    },
    {
      title: "Compteur Dynamique",
      description: "Un compteur interactif utilisant useState pour gérer la valeur.",
      technologies: "React, useState",
      component: <Counter />
    },
    {
      title: "Formulaire Contrôlé",
      description: "Formulaire géré avec useState pour chaque champ (nom, email, message).",
      technologies: "React, useState",
      component: <ControlledForm />
    }
  ];

  return (
    <motion.section
      className="bg-gray-900 text-white flex justify-center px-6 py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full items-start">
        
        {/* Colonne gauche - Langages & Technologies compacte */}
        <div className="bg-gray-800 rounded-lg p-4 shadow-lg flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-3 border-b border-gray-600 pb-2 w-full text-center">
            Ma stack technique
          </h3>
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            <div className="flex flex-col items-center">
              <FaHtml5 size={32} className="text-orange-500" />
              <span className="mt-1 text-xs">HTML</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt size={32} className="text-blue-500" />
              <span className="mt-1 text-xs">CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <FaJs size={32} className="text-yellow-400" />
              <span className="mt-1 text-xs">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <FaReact size={32} className="text-blue-400" />
              <span className="mt-1 text-xs">React</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss size={32} className="text-teal-400" />
              <span className="mt-1 text-xs">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <FaJava size={32} className="text-red-500" />
              <span className="mt-1 text-xs">Java</span>
            </div>
          </div>
        </div>

        {/* Colonne droite - Projets */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 font-serif">Mes Projets</h2>
          <p className="text-sm text-gray-300 mb-6">
            Voici une sélection de mes projets personnels et académiques, développés pour pratiquer et améliorer mes compétences.
          </p>
          
          <div className="grid grid-cols-1 gap-5">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
              >
                {project.component}
              </ProjectCard>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;