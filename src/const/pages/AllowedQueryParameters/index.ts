import { PageAssociation } from '../pages.type';

const AllowedQueryParameters: PageAssociation<{[key: string]: string} | {}> = new Map([
    ["top", {}],
    ["blogs", {pid: "pid"}],
    ["contact", {}],
    ["musics", {pid: "pid"}],
    ["videos", {pid: "pid"}]
])

export default AllowedQueryParameters