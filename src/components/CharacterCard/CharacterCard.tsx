import Image from 'next/image';
import styles from './CharacterCard.module.css';
import { Typography } from '../Typography/Typography';
import clsx from 'clsx';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <li className={styles.container}>
      <Image src={character.image} alt={character.name} width={300} height={300} />
      <div className={styles.info_container}>
        <Typography variant="title-2" tag="h2">
          {character.name}
        </Typography>
        <div>
          <span className={clsx(styles.status, styles[character.status.toLowerCase()])} />
          {character.status} - {character.species}
        </div>
        <div>
            <Typography tag="span" variant='label'>Last known locarion:</Typography>
            <a href="#">{character.location.name}</a>
        </div>
      </div>
    </li>
  );
};
