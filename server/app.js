import express from 'express';
import Bundler from 'parcel-bundler';
import path from 'path';
import http from 'http';
import socket from 'socket.io';


const app = express();
const server = http.Server(app);
const io = socket(server);
const port = 8000;
const bundler = new Bundler(path.resolve(__dirname, '../client/index.html'));

app.use(bundler.middleware());

server.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});