import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout.js';
import {BreadcrumbsItem} from 'react-breadcrumbs-dynamic'


export default function Post() {
  const router = useRouter();

  return (
    <Layout>
<BreadcrumbsItem to={`${router.asPath}`}>Player {router.query.id}</BreadcrumbsItem>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
}