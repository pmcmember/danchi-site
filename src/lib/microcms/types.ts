export type MicroCMSWebhookRequest<T> = {
    service: string;
    api: string;
    id: string | null;
    type: string;
    contents: {
        [key in "out" | "new"]: {
            id: string;
            status: Array<"DRAFT" | "PUBLISH">;
            draftKey: string | null;
            draftValue: T | null;
            publishValue: T | null;
        } | null
    } | null;
}