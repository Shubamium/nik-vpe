import HeaderTwo from "../components/headerTwo/HeaderTwo";

export default function LayoutSecond({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div id="newlayout">{children}</div>;
}
