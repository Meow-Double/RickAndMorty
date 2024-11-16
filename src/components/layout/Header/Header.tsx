import Link from 'next/link';
import { Logo } from '../../icons';
import { ROUTES } from '@/src/utils/constants';

export const Header = () => {
  return (
    <header className="bg-gray-300 w-full">
      <div className="container flex justify-between py-4 items-center text-slate-700">
        <Logo />
        <nav>
          <ul>
            <li>
              <Link href={ROUTES.CHARACTERS}>Characters</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
