"use client";
import CharacterCard from "@/components/character-card/character-card";
import { Character } from "@/domain/models/character";
import { useEffect, useState } from "react";

export default function Home() {
  const [chars, setChars] = useState<Character[]>([]);
  useEffect(() => {
    fetch("/api/character").then((r) => {
      r.json().then((data) => {
        setChars(data);
      });
    });
  });
  return (
    <main className="flex min-h-screen p-24 ">
      <div className="flex flex-wrap max-w-[1040px] ml-auto mr-auto ">
        {chars.map((char) => (
          <div className="p-2">
            <CharacterCard
              image={`${char.thumbnail.path}.${char.thumbnail.extension}`}
              name={char.name}
              key={char.id}
              nameComplement=""
            />
          </div>
        ))}
      </div>
    </main>
  );
}
