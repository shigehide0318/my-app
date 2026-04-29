export default function Page() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        しげまつのページ
      </h1>

      <p>ようこそ 👋</p>

      <section style={{ marginTop: "30px" }}>
        <h2>プロフィール</h2>
        <ul>
          <li>職業：システムエンジニア</li>
          <li>趣味：プログラミング</li>
          <li>目標：Next.jsマスターになる</li>
        </ul>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2>やりたいこと</h2>
        <ul>
          <li>Next.jsでWebアプリを作る：OK</li>
          <li>GitHubにアップする：OK</li>
          <li>Vercelにアップする：OK</li>
          <li>Storybookを導入する：NG</li>
        </ul>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2>メモ</h2>
        <p>Next.js 勉強中 🚀</p>
      </section>
    </main>
  )
}
