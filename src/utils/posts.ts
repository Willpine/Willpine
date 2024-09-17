// For parsing data from filesystem

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MatterResult } from '../types/MatterResult';

const postsDirectory = path.join(process.cwd(), 'md_posts');

export async function getSortedPostData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostData = fileNames.map((filename) => {

    // Remove md, get only filename as id
    const id = filename.replace(/\.md$/, '');

    // Read markdown file as String
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Parse metadata section
    const matterResult = matter(fileContents) as MatterResult<string>;

    return {
      id, ...matterResult.data
    };

  });

  // Sort posts by date
  return allPostData.sort((postA, postB) => {

    if (postA.date < postB.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string) {

  // Read markdown file as String
  const fullPath = path.join(postsDirectory, id);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Parse metadata section
  const matterResult = matter(fileContents) as MatterResult<string>;

  return {
    id, ...matterResult
  };
}
