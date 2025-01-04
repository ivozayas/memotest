export default function PageContainer({ children }: { children: React.ReactNode }){
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center">{children}</div>
    )
}