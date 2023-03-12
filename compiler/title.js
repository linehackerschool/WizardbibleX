const title=(text,id)=>{
  text=text.replaceAll("=","\\=")
    .replaceAll("-","\\-");
  text=text.split("\r\n").slice(5).join("\r\n");
  text=`# Wizardbible #${id}`+text;
  return text;
};
export default title;
