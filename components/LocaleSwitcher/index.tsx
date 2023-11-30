'use client';

import {usePathname} from 'next/navigation';
import Link from 'next/link';

import {i18n} from '@/i18n-config';
import {Wrapper, List, Item} from './styles';

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  console.log(
    'process.env.NEXT_PUBLIC_HELLO---',
    process.env.NEXT_PUBLIC_HELLO
  );

  return (
    <Wrapper>
      <List>
        {i18n.locales.map((locale) => {
          return (
            <Item $isPath={locale === pathName.split('/')[1]} key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </Item>
          );
        })}
      </List>
    </Wrapper>
  );
}
