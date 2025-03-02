import { NotionAPI } from "notion-client";

const notion = new NotionAPI({
  authToken: import.meta.env.NOTION_TOKEN_V2, // 1. OAuth 인증
});

export default function Notion() {
  return <div>Notion</div>;
}
