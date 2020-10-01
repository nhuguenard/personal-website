import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const experiencesDirectory = path.join(process.cwd(), 'experience')
export function getSortedExperienceData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(experiencesDirectory)
    const allExperienceData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(experiencesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })
    return allExperienceData.sort((a, b) => {
        if (a.startDate < b.startDate) {
            return 1
        } else {
            return -1
        }
    })
}

export function getAllExperienceIds() {
    const fileNames = fs.readdirSync(experiencesDirectory)
    
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
    }

export async function getExperienceData(id) {
    const fullPath = path.join(experiencesDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
  }