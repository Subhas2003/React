import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featureImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDetabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featureImage,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, content, featureImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDetabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featureImage,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDetabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      //   throw error;
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDetabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("GetPost is not Working..", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDetabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("GetPostes is not Working..", error);
      return false;
    }
  }

  //file upload services

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("File is not working..", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Deleted file..", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
  
}

const service = new Service();
export default service;
