// データ型定義

export interface File extends Blob {
  readonly lastModified: number;
  readonly name: string;
}

// 認証のデータ型
export interface PROPS_AUTHEN {
  email: string;
  password: string;
}

// プロフィールのデータ型
export interface PROPS_PROFILE {
  id: number;
  nickName: string;
  img: File | null;
}

// ニックネームのデータ型
export interface PROPS_NICKNAME {
  nickName: string;
}

// PostSlice
// 投稿のデータ型
export interface PROPS_NEWPOST {
  title: string;
  img: File | null;
}

// 投稿のいいねのデータ型
export interface PROPS_LIKED {
  id: number;
  title: string;
  // 現在いいねしてくれているユーザーのidの配列
  current: number[];
  new: number;
}

// コメントのデータ型
export interface PROPS_COMMENT {
  text: string;
  post: number;
}

// Post
// 投稿一覧のデータ型
export interface PROPS_POST {
  postId: number;
  loginId: number;
  userPost: number;
  title: string;
  imageUrl: string;
  liked: number[];
}
