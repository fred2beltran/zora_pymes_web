// lib/blog.ts
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export interface PostMeta {
  slug: string
  title: string
  excerpt: string
  date: string          // ISO: '2026-03-12'
  category: string
  readTime: string
  featured?: boolean
  ia?: boolean
  cover?: string
}

export interface Post extends PostMeta {
  content: string
}

function ensureDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true })
  }
}

export function getAllPostSlugs(): string[] {
  ensureDir()
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.mdx?$/, ''))
}

export function getPostBySlug(slug: string): Post | null {
  ensureDir()
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`)
  const mdPath = path.join(BLOG_DIR, `${slug}.md`)
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath

  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? '',
    date: data.date ?? new Date().toISOString().slice(0, 10),
    category: data.category ?? 'General',
    readTime: data.readTime ?? `${Math.ceil(stats.minutes)} min`,
    featured: data.featured === true,
    ia: data.ia === true,
    cover: data.cover,
    content,
  }
}

export function getAllPosts(): Post[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getFeaturedPost(): Post | null {
  const posts = getAllPosts()
  return posts.find((p) => p.featured) ?? posts[0] ?? null
}

export function formatDate(iso: string): string {
  const date = new Date(iso)
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}