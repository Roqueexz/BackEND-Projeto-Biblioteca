import { server } from "./server.js";
const port: number = 3333; 

server.listen(port, () => {
  console.log(`O servidor da biblioteca está rodando em http://localhost:${port}`); 
});

