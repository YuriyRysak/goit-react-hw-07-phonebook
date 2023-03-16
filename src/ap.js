import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://641192c7e4c9f0bb00b2c7aa.mockapi.io';
export const fetchContacts = createAsyncThunk('contacts/fetchAll', 
async (_, thunkApi) => {
    try {
    const response = await axios.get('/contacts');
     return response.data;
    } catch (e) {
        return thunkApi.rejectWithValue(e.message);

    }   
 }
);



  
// https://641192c7e4c9f0bb00b2c7aa.mockapi.io/contacts

// fetchContacts - получение массива контактов (метод GET) запросом. Базовый тип экшена "contacts/fetchAll".
// addContact - добавление контакта (метод POST). Базовый тип экшена "contacts/addContact".
// deleteContact - удаление контакта (метод DELETE). Базовый тип экшена "contacts/deleteContact".