import regIndexes from './reg-indexes.js';

const code=text=>{
  const indexes=regIndexes(/^-{3,5}[^-\n\r]*$/mg,text);
  indexes.reverse().forEach(index=>{
    const line=text.slice(index.start,index.end);
    const spl=line.split(".");
    let lang="";
    if(spl.length>=2){
      lang=spl.at(-1);
    }
    text=text.slice(0,index.start)+"```"+lang+text.slice(index.end);
  });
  return text;
};
export default code;
