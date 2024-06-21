// 使用Parallel Routes: 讓每一個頁面去做他自己要做的事情, 彼此不會被影響到
export default function RootLayout({ children, header, menu }) {
  return (
    <>
      <div className="h-8 bg-slate-800">{header}</div>
      <div className="flex">
        <div className="w-1/2 bg-red-500">{children}</div>
        <div className="w-1/2 bg-yellow-300">{menu}</div>
      </div>
    </>
  );
}
