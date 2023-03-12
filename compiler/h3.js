import regIndexes from './reg-indexes.js';

const h3=text=>{
  const indexes=regIndexes(/^■.*$/mg,text);
  indexes.reverse().forEach(index=>{
    let title=text.slice(index.start,index.end);
    title=title
      .replace(/^■/,"### ")
      .replace(".)"," ")
      .replace(/ +/g," ");
    text=text.slice(0,index.start)+title+text.slice(index.end);
  });
  return text;
};
export default h3;