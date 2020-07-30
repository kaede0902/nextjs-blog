import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// current directory + posts
const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostData() {
  // get file names under `posts/`
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

    return {
      id, 
      ...matterResult.data
    }
  })
  // sort by data
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })

}


