
// 因為layout.js 在posts 資料夾底下(是在posts 的作用域),所以只有post route 才會顯示
export default function RootLayout({ children }) {
  return (
    <div>
      <p>PostsLayouts</p>
      {children}
    </div>
  );
}
