
const conf = {
    apiwriteUrl :String(import.meta.env.VITE_APPWRITE_URL),
    projectId :String(import.meta.env.VITE_APPWRITE_PROEJCT_ID),
    databaseId :String(import.meta.env.VITE_APPWRITE_DATABASE_ID ),
    collectionId :String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    mapAccessToken :String(import.meta.env.VITE_MAP_ACCESS_TOKEN)
}

export default conf;