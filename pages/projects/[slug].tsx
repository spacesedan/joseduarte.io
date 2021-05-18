import hydrate from 'next-mdx-remote/hydrate';
import { getFiles, getFileBySlug } from 'lib/mdx';
import MDXComponents from 'components/MDXComponents';
import ProjectLayout from 'layouts/ProjectLayout';

export default function Project({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return <ProjectLayout frontMatter={frontMatter}>{content}</ProjectLayout>;
}

export async function getStaticPaths() {
  const projects = await getFiles('projects');

  return {
    paths: projects.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = await getFileBySlug('projects', params.slug);

  return { props: project };
}
