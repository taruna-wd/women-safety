import conf from "../varibleImport/configu";
import { Client, Databases, ID } from "appwrite"

export class Service {
    Client = new Client();
    databases;

    constructor() {
        this.Client
            .setEndpoint(conf.apiwriteUrl)
            .setProject(conf.projectId)
        this.databases = new Databases(this.Client)
    }
    async createEntry({ fullName, email, phone, location, incidentType, way, urgent, help, agree }) {
        try {
            return await this.databases.createDocument(
                conf.databaseId, 
                conf.collectionId, 
                ID.unique(),
                 { fullName, email, phone, location, incidentType, way, urgent, help, agree },
                 )
        } catch (error) {
    console.log("appwrite service error " , error)
        }
    }
}

const service = new Service();

export default service