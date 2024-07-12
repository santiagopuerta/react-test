import { 
  User as UserType,
  Post as PostType
} from '../interfaces'

export type PostProps = {
  post: PostType
  user: UserType
}