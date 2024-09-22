import { useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, contactNo });
  };

  return (
    <div className="bg-[#4A4A4A] p-8 w-full">
      <h2 className="text-white text-center text-4xl mb-6">
        HAVE A QUESTION OR WANT TO SPEAK TO OUR TEAM?
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-center items-center gap-4">
        <input
          type="text"
          placeholder="Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-transparent border border-white text-white placeholder-white p-2 w-full sm:w-64"
          required
        />
        <input
          type="email"
          placeholder="Email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border border-white text-white placeholder-white p-2 w-full sm:w-64"
          required
        />
        <input
          type="tel"
          placeholder="Contact No. *"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
          className="bg-transparent border border-white text-white placeholder-white p-2 w-full sm:w-64"
          required
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
        >
          Submit <ArrowRightIcon className="ml-2 h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
