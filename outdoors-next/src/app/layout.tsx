import React, { PropsWithChildren } from 'react';
import Link from 'next/link';

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/national-parks">National Parks</Link>
          </li>
          <li>
            <Link href="/mountains">Mountains</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
