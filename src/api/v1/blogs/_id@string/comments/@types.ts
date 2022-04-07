export type CommentsSchema = {
    [id: string]: {
        title: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        userId: string | null;
    }
}