
const conf = {
    apiwriteUrl :String(import.meta.env.VITE_APPWRITE_URL),
    projectId :String(import.meta.env.VITE_APPWRITE_PROEJCT_ID),
    databaseId :String(import.meta.env.VITE_APPWRITE_DATABASE_ID ),
    collectionId :String(import.meta.env.VITE_APPWRITE_COLLECTION_ID)
}

export default conf;