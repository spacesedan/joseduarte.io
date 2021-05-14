export default function Meta() {
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
