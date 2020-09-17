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
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
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

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        // 正規表現で末尾の.md を無くす
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export function getPostData(id) {
  // path と引数の id を join ,  utf8 と matter をかける
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  return {
    id,
    ...matterResult.data
  }
}


