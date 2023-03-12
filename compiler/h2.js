import regIndexes from './reg-indexes.js';

const h2=text=>{
  const indexes=regIndexes(/\n *?(----?) .+?(----?) *?\r/gm,text);
  indexes.reverse().forEach(index=>{
    let title=text.slice(index.start,index.end);
    title=title
      .replace(/[\n\r]/g," ")
      .replace(/ +/g," ")
      .replace(/^ *?(----?)/,"")
      .replace(/(----?) *?$/,"")
      .replace(/^ */,"")
      .replace(/ *$/,"");
    text=text.slice(0,index.start)+"\n## "+title+"\r"+text.slice(index.end);
  });
  return text;
};
export default h2;