//download
const clone=Deno.run({
  cmd:["git","clone","https://github.com/linehackerschool/wizardbible"],
});
await clone.status();

import compile from "./compiler/index.js";
async function file(path,id){
  const text=await Deno.readTextFile(path);
  const result=compile(text,id);
  await Deno.writeTextFile(`./dist/${id}.md`,text);
}
await Deno.mkdir("./dist")
for(let i=1;i!==65;i++){
  const path=`./wizardbible/${i}/${i}.txt`;
  file(path,i)
}