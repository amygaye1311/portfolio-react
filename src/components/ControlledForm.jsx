import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form className="flex flex-col gap-4 text-sm">
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 rounded bg-gray-600 text-white"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 rounded bg-gray-600 text-white"
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="p-2 rounded bg-gray-600 text-white"
      />
      <p className="text-gray-400">Nom: {name} | Email: {email} | Message: {message}</p>
    </form>
  );
}

export default ControlledForm;