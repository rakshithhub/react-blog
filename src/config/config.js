const conf = {
    appwrite_base_url: String(import.meta.env.VITE_APPWRITE_BASE_URL),
    appwrite_project_id: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwrite_databases_id: String(import.meta.env.VITE_APPWRITE_DATABASES_ID),
    appwrite_collection_id: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwrite_storage_id: String(import.meta.env.VITE_APPWRITE_STORAGE_ID),
}

export default conf;