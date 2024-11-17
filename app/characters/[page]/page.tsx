// import { Metadata } from 'next';

import { caller } from '@/server/routes';
import { CharacterCard } from '@/src/components';
import { getRandomCharactersPage } from '@/src/utils/helpers';
import styles from '../../page.module.css';
// export const metadata: Metadata = {
//   title: 'Characters',
// };

export const generateStaticParams = async () => {
  const charactersResponse = await caller.getCharacters();

  return Array.from(Array(charactersResponse.response.info.pages).keys()).map((number) => ({
    page: `${number + 1}`,
  }));
};

const CharactersPage = async () => {
  const charactersResponse = await caller.getCharacters({
    params: { page: getRandomCharactersPage() },
  });
  const characters = charactersResponse.response.results.slice(0, 8);

  return (
    <section>
      <ul className={styles.characters_container}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    </section>
  );
};

export default CharactersPage;
