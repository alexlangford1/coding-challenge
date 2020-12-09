import Api from '@services/Api';
import useSWR from 'swr';

export default function useUsers() {
  return useSWR(`/api/v1/users`, Api.get);
}
