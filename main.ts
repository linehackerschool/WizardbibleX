//download
const clone=Deno.run({
  cmd:["git","clone","https://github.com/linehackerschool/wizardbible"],
});
await clone.status();
for(let i=1;i!==65;i++){
  const path=`./wizardbible/${i}/${i}.txt`;
  console.log(path)
}