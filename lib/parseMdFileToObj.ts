const matter = require("gray-matter");
const fs = require("fs");
const path = require("path");


const parseMdFileToObj = async(filePath:string)=>{

    const mdData = await fs.readFileSync(path.join(process.cwd(),"content",filePath),{ encoding: 'utf8' });
    const {data,content} = matter(mdData.toString());
    return {data,content}
         



}

export default parseMdFileToObj