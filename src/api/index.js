import { Client as Appwrite, Databases, Account, Permission, Role } from 'appwrite';
import { Server } from '../utils/config';

let api = {
  sdk: null,

  provider: () => {
    if (api.sdk) {
      return api.sdk;
    }
    let appwrite = new Appwrite();
    appwrite.setEndpoint(Server.endpoint).setProject(Server.project);
    const account = new Account(appwrite);
    const database = new Databases(appwrite, Server.database);

    api.sdk = { database, account };
    return api.sdk;
  },

  createAccount: (email, password, name) => {
    return api.provider().account.create('unique()', email, password, name);
  },

  getAccount: () => {
    return api.provider().account.get();
  },

  createSession: (email, password) => {
    return api.provider().account.createEmailSession(email, password);
  },

  deleteCurrentSession: () => {
    return api.provider().account.deleteSession('current');
  },

  createDocument: (collectionId, data, userId) => {
    return api
      .provider()
      .database.createDocument(Server.database, collectionId, 'unique()', data, [
        Permission.read(Role.user(userId)),
        Permission.update(Role.user(userId)),
        Permission.delete(Role.user(userId))
      ]);
  },

  listDocuments: (collectionId) => {
    return api.provider().database.listDocuments(Server.database, collectionId);
  },

  updateDocument: (collectionId, documentId, data) => {
    return api
      .provider()
      .database.updateDocument(Server.database, collectionId, documentId, data);
  },

  deleteDocument: (collectionId, documentId) => {
    return api.provider().database.deleteDocument(Server.database, collectionId, documentId);
  },
};

export default api;
