import useSWR from 'swr';

import { getAuthCookie } from '@/utils/auth-utils';

// ユーザーデータの型定義
interface User {
  allow_password_change: boolean;
  created_at: string;
  email: string;
  id: number;
  image: string | null;
  name: string;
  nickname: string | null;
  provider: string;
  uid: string;
  updated_at: string;
}

// フェッチャー関数
const fetchUserData = async (): Promise<User> => {
  const access_token = getAuthCookie('access-token');
  const client = getAuthCookie('client');
  const uid = getAuthCookie('uid');

  // if (!access_token || !client || !uid) {
  //   throw new Error('認証情報がありません');
  // }

  const response = await fetch('http://localhost:3001/api/v1/current_user', {
    method: 'GET',
    headers: {
      'access-token': access_token,
      'client': client,
      'uid': uid,
      'Content-Type': 'application/json',
    }
  });

  if (!response.ok) {
    throw new Error('ユーザーデータの取得に失敗しました');
  }

  return response.json();
};

/**
 * ユーザーデータを取得するカスタムフック
 * @param {Object} options - SWRのオプション
 * @returns {Object} SWRのレスポンス
 */
export const useCurrentUser = (options = {}) => {
  const { data, error, isLoading, mutate } = useSWR<User>(
    '/api/v1/current_user', 
    fetchUserData,
    {
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1分間は重複リクエストをしない
      ...options
    }
  );

  return {
    user: data,
    isLoading,
    isError: error,
    mutate
  };
};
