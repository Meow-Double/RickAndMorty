import Image from "next/image";
import styles from "./CharacterCard.module.css"
import { Typography } from "../Typography/Typography";

interface CharacterCardProps {
    character: Character;
}

export const CharacterCard = ({character}: CharacterCardProps) => {
    return <li className={styles.container}>
        <Image src={character.image} alt={character.name} fill/>
        <Typography variant="title-2" tag="h2">{character.name}</Typography>
    </li>
};