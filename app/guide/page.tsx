import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "사용법 | todo",
  description: "할 일 앱을 사용하는 방법을 안내합니다.",
}

const STEPS = [
  {
    title: "할 일 추가",
    body: "입력창에 내용을 쓰고 Enter를 누르면 목록에 추가됩니다.",
  },
  {
    title: "완료 표시",
    body: "항목 왼쪽 체크박스를 누르면 완료로 바뀌고, 다시 누르면 진행중으로 돌아갑니다.",
  },
  {
    title: "수정",
    body: "항목 글자를 더블클릭하면 수정할 수 있습니다. Enter로 저장하고 Esc로 취소합니다.",
  },
  {
    title: "삭제",
    body: "항목 오른쪽 휴지통 버튼을 누르면 해당 항목이 삭제됩니다.",
  },
  {
    title: "필터",
    body: "전체, 진행중, 완료 탭으로 보고 싶은 항목만 골라 볼 수 있습니다.",
  },
  {
    title: "완료한 일 지우기",
    body: "완료한 항목이 있으면 목록 아래에 버튼이 나타납니다. 누르면 완료한 항목이 모두 삭제됩니다.",
  },
  {
    title: "저장",
    body: "할 일은 이 브라우저(localStorage)에 저장됩니다. 다른 브라우저나 기기에서는 보이지 않습니다.",
  },
]

export default function GuidePage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-md flex-col gap-6 p-6 pt-16">
      <h1 className="text-3xl font-bold tracking-tight">사용법</h1>
      <ol className="flex flex-col gap-4">
        {STEPS.map(({ title, body }, i) => (
          <li key={title} className="flex gap-3">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
              {i + 1}
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold">{title}</h2>
              <p className="text-sm text-muted-foreground">{body}</p>
            </div>
          </li>
        ))}
      </ol>
      <Link href="/" className="text-sm underline underline-offset-4">
        할 일 목록으로 돌아가기
      </Link>
    </main>
  )
}
