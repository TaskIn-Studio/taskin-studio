import Link from 'next/link';
import type { FC } from 'react';

export const Logo: FC = () => {
  return (
    <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
      Taskin Studio
    </Link>
  );
};
