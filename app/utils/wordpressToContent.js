import htmlToMarkdown from 'html-to-markdown';

export function convertWPToContentFormat(wpPost) {
  return {
    _id: `wordpress-${wpPost.id}`,
    _path: `/blog/${wpPost.slug}`,
    _type: 'markdown',
    title: wpPost.title.rendered,
    body: htmlToMarkdown(wpPost.content.rendered),
    description: wpPost.excerpt.rendered,
    createdAt: wpPost.date,
    updatedAt: wpPost.modified
  }
}
