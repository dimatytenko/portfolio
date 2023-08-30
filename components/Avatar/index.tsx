import React from 'react';
import Image from 'next/image';

import {AvatarWrapper} from './styles';
import avatar from '@/public/img/static/photo_2.webp';

export const Avatar = () => {
  return (
    <AvatarWrapper>
      <Image
        src={avatar}
        alt="avatar"
        width={344}
        height={380}
        priority={true}
      />
    </AvatarWrapper>
  );
};
