function ProjectCard({ title, description, technologies, children }) {
  return (
    <div className="bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300 mb-2">{description}</p>
      <p className="text-xs text-blue-400 mb-4">Technologies : {technologies}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}

export default ProjectCard;