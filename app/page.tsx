import { caller } from '@/server/routes';
import { CharacterCard, Typography } from '@/src/components';
import { getRandomCharactersPage } from '@/src/utils/helpers';
import styles from './page.module.css';

const Home = async () => {
  const charactersResponse = await caller.getCharacters({
    params: { page: getRandomCharactersPage() },
  });
  const characters = charactersResponse.response.results.slice(0, 8);
  return (
    <section>
      <Typography tag="h1" variant="title-1">
        Rick and Morty!
      </Typography>
      <ul className={styles.characters_container}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    </section>
  );
};

export default Home;
