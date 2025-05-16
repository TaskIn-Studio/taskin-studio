import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

export const Logo: FC = () => {
  return (
    <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
      <Image src="/taskin-logo.svg" alt="Taskin Studio" width={100} height={100} />
    </Link>
  );
};
