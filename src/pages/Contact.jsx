import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaSnapchat } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // ✅ icône X

function Contact() {
  return (
    <motion.section
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Titre */}
      <h2 className="text-4xl font-bold mb-8">Contactez-moi</h2>
      <p className="text-lg text-gray-300 mb-8">Retrouvez-moi sur mes réseaux :</p>
      
      {/* Réseaux sociaux */}
      <div className="flex gap-8 flex-wrap justify-center mb-12">
        <a href="https://github.com/amygaye1311" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} className="hover:text-blue-400 transition-transform transform hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/amy-gaye-07984339b?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} className="hover:text-blue-400 transition-transform transform hover:scale-110" />
        </a>
        <a href="https://www.instagram.com/aminaah____g?igsh=OGN2cXp4M3Z1NTRh&utm_source=qr&wa_status_inline=true" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={40} className="hover:text-pink-500 transition-transform transform hover:scale-110" />
        </a>
        <a href="https://www.facebook.com/share/1HqnAikpW6/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={40} className="hover:text-blue-600 transition-transform transform hover:scale-110" />
        </a>
        <a href="https://snapchat.com/t/soD7hBjB" target="_blank" rel="noopener noreferrer">
          <FaSnapchat size={40} className="hover:text-yellow-400 transition-transform transform hover:scale-110" />
        </a>
        <a href="https://x.com/amina_g13267?s=21" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={40} className="hover:text-gray-400 transition-transform transform hover:scale-110" />
        </a>
      </div>

      {/* Adresse email en bas */}
      <div className="border-t border-gray-700 pt-6 w-full text-center">
        <p className="text-sm text-gray-400">
          Vous pouvez aussi me contacter par email :{" "}
          <a
            href="mailto:amygaye1311@gmail.com"
            className="text-blue-400 hover:underline"
          >
            amygaye1311@gmail.com
          </a>
        </p>
      </div>
    </motion.section>
  );
}

export default Contact;