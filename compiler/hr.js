import regIndexes from './reg-indexes.js';

const hr=text=>{
  const indexes=regIndexes(/^x0xXx0xx0xXx0xx0xXx0xx0xXx0xx0xXx0xx0xXx0xx0xXx0xx0xXx0xx0xXx0xx0xXx0xx0xXx0x$/mg,text);
  indexes.reverse().forEach(index=>{
    text=text.slice(0,index.start)+"***"+text.slice(index.end);
  });
  text=text.replace(/\*\*\*\r\n\*\*\*/g,"***");
  return text;
};
export default hr;