// components/blog/MDXContent.tsx
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

interface Props {
  source: string
}

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-12 mb-4 text-2xl font-bold text-balance scroll-mt-24"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-8 mb-3 text-xl font-semibold text-balance scroll-mt-24"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="my-5 text-md leading-relaxed text-fg/90" {...props} />
  ),
  a: ({ href, children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith('http')
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 hover:text-primary-hover"
          {...rest}
        >
          {children}
        </a>
      )
    }
    return (
      <Link
        href={href ?? '#'}
        className="text-primary underline underline-offset-4 hover:text-primary-hover"
      >
        {children}
      </Link>
    )
  },
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-5 list-disc space-y-2 pl-6 text-md text-fg/90" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="my-5 list-decimal space-y-2 pl-6 text-md text-fg/90"
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-6 border-l-2 border-primary bg-surface/50 py-3 pl-5 pr-4 italic text-muted"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-line" />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-fg" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded-sm border border-line bg-surface px-1.5 py-0.5 font-mono text-[0.85em] text-primary"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="my-6 overflow-x-auto rounded-md border border-line bg-surface p-4 text-sm"
      {...props}
    />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 overflow-x-auto rounded-md border border-line">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="border-b border-line bg-surface px-4 py-2 text-left font-semibold"
      {...props}
    />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="border-b border-line px-4 py-2" {...props} />
  ),
}

export function MDXContent({ source }: Props) {
  return (
    <div className="max-w-none">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            rehypePlugins: [
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: 'wrap' }],
            ],
          },
        }}
      />
    </div>
  )
}