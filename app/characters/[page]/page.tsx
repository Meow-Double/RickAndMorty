// import { Metadata } from 'next';

import { caller } from '@/server/routes';

// export const metadata: Metadata = {
//   title: 'Characters',
// };

interface CharactersPageProps {
  params: {
    page: string;
  };
}

export const CharactersPage = async ({ params }: CharactersPageProps) => {
  const characters = await caller.getCharacters({ page: +params.page });

  return (
    <section>
      <h1>
        {characters.response.data.results.map((character) => (
          <div key={character.id}>{character.name}</div>
        ))}
      </h1>
    </section>
  );
};

export default CharactersPage;
