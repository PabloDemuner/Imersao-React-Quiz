//Component Next.JS para melhor carregamento das páginas

import React from 'react';
import NextLink from 'next/link';

export default function({children, href, ...props}) {
    return(
        <NextLink href={href} passHref>
            <a {...props}>
                {children}
            </a>
        </NextLink>
    );
}