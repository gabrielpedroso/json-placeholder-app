'use client';
import styles from './SearchBar.module.css';
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
      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          className={styles.input}
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </form>
    </>
  );
}