import { PageAssociation } from '../pages.type'

export const AllowedQueryParameters: PageAssociation<
    { [key: string]: string } | {}
> = new Map([
    ['top', {}],
    ['blogs', { pid: 'pid' }],
    ['contact', {}],
    ['musics', { pid: 'pid' }],
    ['videos', { pid: 'pid' }],
])
