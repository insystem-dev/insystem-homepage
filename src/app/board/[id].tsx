import { useQuery } from "@tanstack/react-query";
import { NoticeDetail } from "../../components/atoms/NoticeDetail";
import { DetailTemplate } from "../../components/templates/DetailTemplate";
import { noticeList } from "./Notice";
import { AxiosError } from "axios";
import { request } from "../../lib/api";
import { useLocation, useParams } from "react-router-dom";

export default function NoticePost() {
  let { id } = useParams();
  const { data: notice, refetch: noticeRefetch } = useQuery<
    noticeList,
    AxiosError
  >(["get_notice_one"], () =>
    request<noticeList[]>({
      method: "GET",
      url: `notice/${id}`,
    }).then((res) => {
      return res[0];
    })
  );
  return (
    <DetailTemplate>
      <NoticeDetail notice={notice} />
    </DetailTemplate>
  );
}
