import * as util from "./util.js";

export default function compile(text,id){
  text=util.code(text);
  text=util.hr(text);
  text=util.h2(text);
  text=util.h3(text);
  text=util.ul(text);
  text=util.title(text,id);
  return text;
}