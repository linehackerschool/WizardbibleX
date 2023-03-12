async function run(cmd:string[]){
  const p=Deno.run({
    cmd:cmd,
  });
  await p.status();
}
await run(["git","add","."]);
await run(["git","commit","-m","build"]);
await run(["git","push"]);