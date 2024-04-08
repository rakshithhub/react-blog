import {Client, ID, Databases, Storage, Query} from 'appwrite'
import conf from '../config/config.js';

    class Services {
        client = new Client()
        databases;
        bucket;

        constructor(){
            this.client.setEndpoint(conf.appwrite_base_url).setProject(conf.appwrite_project_id);
            this.databases = new Databases(this.client)
            this.bucket = new Storage(this.client)
        }

        //Create Document

        async createPost ({title, content, featuredImage, status, userId, slug}) {
            try {
                return await this.databases.createDocument(conf.appwrite_databases_id, conf.appwrite_collection_id, slug, {title, content, featuredImage, status, userId})
            } catch (error) {
                console.log(error);
            }
        }

        //Update Document

        async updatePost (slug, {title, content, featuredImage}){
            try {
                return await this.databases.updateDocument(conf.appwrite_databases_id, conf.appwrite_collection_id, slug, {title, content, featuredImage})
            } catch (error) {
                console.log(error);
            }
        }

        //Delete Document

        async deletePost (slug) {
            try {
                return await this.databases.deleteDocument(conf.appwrite_databases_id, conf.appwrite_collection_id, slug)
            } catch (error) {
                console.log(error);
            }
        }

        //Get Document

        async getPost (slug) {
            try {
                return await this.databases.getDocument(conf.appwrite_databases_id, conf.appwrite_collection_id, slug);
            } catch (error) {
                console.log(error);
            }
        }

        //Get Documents
        
        async getPosts (queries = [Query.equal('status','active')]) {
            try {
                return await this.databases.listDocuments(conf.appwrite_databases_id, conf.appwrite_collection_id, queries)
            } catch (error) {
                console.log(error);
            }
        }

        //Upload File

        async uploadFile (file){
            try {
                return await this.bucket.updateFile(conf.appwrite_storage_id, ID.unique(), file)
            } catch (error) {
                console.log(error);
            }
        }

        //File Preview

        async getFilePreview (fileId) {
            try {
                return await this.bucket.getFilePreview(conf.appwrite_storage_id, fileId)
            } catch (error) {
                console.log(error);
            }
        }

        //Delete file

        async deleteFile (fileId) {
            try {
                return await this.bucket.deleteFile(conf.appwrite_storage_id, fileId)
            } catch (error) {
                console.log(error);
            }
        }


}

const services = new Services();
export default services;