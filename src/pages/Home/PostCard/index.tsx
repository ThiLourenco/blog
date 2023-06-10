import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import { IPost } from "..";
import { formatText } from "../../../utils/formatText";
import { PostCardContainer } from "./styles";

interface IPostCard {
  post: IPost;
}

export function PostCard({ post }: IPostCard) {
  const { created_at, body, title, number } = post;
  const formattedDate = formatDistanceToNow(new Date(created_at), {
    locale: enUS,
    addSuffix: true,
  });

  const formattedBody = body ? formatText(body, 80) : "";

  return (
    <PostCardContainer to={`/${number}`}>
      <header>
        <h1>{title}</h1>
        <span>{formattedDate}</span>
      </header>
      <main>
        <p>{formattedBody}</p>
      </main>
    </PostCardContainer>
  );
}
