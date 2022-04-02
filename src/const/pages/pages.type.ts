import { PagesPath } from '@/lib/$path';

export type PageNames = Exclude<keyof PagesPath, "$url"> | "top"

export type PageAssociation<T = string> = Map<PageNames, T>