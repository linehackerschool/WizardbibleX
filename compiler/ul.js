const ul=text=>{
  text=text
    .replace(/^○/gm,"- ")
    .replace(/^・/gm,"  - ");
  return text;
};
export default ul;