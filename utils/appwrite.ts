import { Client, Databases, Account } from 'appwrite';

const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject('6691bd780036f33f4214');
export const account = new Account(client)
export const database = new Databases(client);