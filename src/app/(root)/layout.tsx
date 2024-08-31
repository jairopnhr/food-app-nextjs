interface SetupLayoutProps
{
  children: React.ReactNode;
}




export default function SetupLayout({children}:SetupLayoutProps ) {
  return (
    <div>
    {children}
    </div>
  );
}
