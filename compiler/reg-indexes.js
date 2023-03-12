export default (regexp,text)=>{
  let array;
  const result=[];
  while((array=regexp.exec(text))!==null){
    result.push({
      start:array.index,
      end:regexp.lastIndex,
    });
  }
  return result;
};
  