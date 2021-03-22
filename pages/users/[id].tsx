import useSWR from 'swr';

export const getStaticPaths = async () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR('/api/v1/users/x', fetcher);

  const paths = data.map((e) => {
    return {
      params: { id: e.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
const UserId = () => {

  return <div>hi</div>;
};

export default UserId;
