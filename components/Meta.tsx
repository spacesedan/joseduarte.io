import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Meta(props) {
  const router = useRouter();
  const { customMeta } = props;

  type Meta = {
    title: string;
    description: string;
    image: string;
    type: string;
  };

  const meta: Meta = {
    title: 'Jose Duarte - Developer, designer, creator',
    description: 'Full-stack developer, Typescript fanboy.',
    image: '',
    type: 'website',
    ...customMeta,
  };

  return (
    <Head>
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <meta
        property='og:url'
        content={`https://oh-say.media${router.asPath}`}
      />
      <link rel='canonical' href={`ttps://oh-say.media${router.asPath}`} />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Jose Duarte' />
      <meta property='og_description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta property='og_image' content={meta.image} />
    </Head>
  );
}
