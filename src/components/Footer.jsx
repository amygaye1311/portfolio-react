function Footer() {
  return (
    // Ajout de "mt-auto" pour qu'il se pousse vers le bas si le parent est en flex
    <footer className="bg-gray-900 text-white px-6 py-4 mt-auto border-t border-gray-700">
      <div className="flex justify-center items-center">
        <p className="text-sm text-center w-full">
          ©️ 2026 Mon Portfolio - Amy Dev
        </p>
      </div>
    </footer>
  );
}

export default Footer;