//download
const clone=Deno.run({
  cmd:["git","clone","https://github.com/linehackerschool/wizardbible"],
});
await clone.status();

import compile from "./compiler/index.js";
async function file(path,id){
  const text=await Deno.readTextFile(path);
  const result=compile(text,id);
  await Deno.writeTextFile(`./markdown/${id}.md`,result);
}
try{
  await Deno.mkdir("./markdown")
}catch(e){
  
}
for(let i=1;i!==65;i++){
  const path=`./wizardbible/${i}/${i}.txt`;
  file(path,i)
}
