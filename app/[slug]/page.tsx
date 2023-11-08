import { getPage, getProject } from '@/sanity/sanity-utils';
import React from 'react';

type Props = {
    params: {slug: string}
}

const Page = async ({params}: Props) => {
    const page = await getPage(params.slug)
    return (
        <div>
            <p>{page.title}</p>
        </div>
    );
}

export default Page;
