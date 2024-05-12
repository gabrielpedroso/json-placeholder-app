'use client';
import { useState } from "react";

export default function SearchBar(props: { onSearch: (id: number) => void }) {
  const [id, setId] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsedId = parseInt(id);

    if(!isNaN(parsedId)) {
      props.onSearch(parsedId)
    }
  }

  return (
    <>
      <form className="flex gap-4 justify-center" onSubmit={handleSubmit}>
        <input 
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border border-gray-300 px-2 py-1 rounded-md text-black w-full"
        />
        <button type="submit">
          Pesquisar
        </button>
      </form>
    </>
  );
}