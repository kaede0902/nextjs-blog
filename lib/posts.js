// fs, path, をnodeから, 
// markdownの読み取りをgray-matterから
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import fetch from 'node-fetch'

// current directory + postsをjoinして入れる
const postsDirectory = path.join(process.cwd(), 'posts')

// ファイル名からIDを作ってmeta sectionから
// meta dataのheaderを作る
export function getSortedPostsData() {
  // `posts/` 以下のfilesを読み取り, 入れる
  const fileNames = fs.readdirSync(postsDirectory);
  // Execute to each array index from each files
  const allPostsData = fileNames.map(fileName => {
    // change fileName's .md to nothing, 
    // and assign to id
    const id = fileName.replace(/\.md$/, '');
    // change path + fileName to string, 
    // and assign to fullPath
    const fullPath = path.join(postsDirectory, fileName);
    // change fullPath to utf8, 
    // and assign to fileContents
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // use `gray-matter` to parse posts' markdown's `metadata` section.
    const matterResult = matter(fileContents);

    // idとmetaDataを合成したものを統合する
    return {
      id, 
      ...matterResult.data
    }
  })
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })

}


