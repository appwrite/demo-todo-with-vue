export const Server = {
    endpoint : import.meta.env.VITE_APP_ENDPOINT,
    project: import.meta.env.VITE_APP_PROJECT,
    collectionID : import.meta.env.VITE_APP_COLLECTION_ID,
    database: import.meta.env.VITE_APP_DATABASE_ID.toString(),
}