import { caller } from '@/server/routes';
import { CharacterCard, Typography } from '@/src/components';
import { getRandomCharactersPage } from '@/src/utils/helpers';

const Home = async () => {
  const charactersResponse = await caller.getCharacters({ page: getRandomCharactersPage() });
  const characters = charactersResponse.response.data.results.slice(0, 6);
  return (
    <section>
      <Typography tag="h1" variant="title-1">
        Rick and Morty!
      </Typography>
      <ul>
        <h1>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </h1>
      </ul>
    </section>
  );
};

export default Home;
