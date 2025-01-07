import Link from "next/link"

export default function LinkBtn({ children, url }: { children?: React.ReactNode, url: string }){
    return (
        <Link href={url}>{ children }</Link>
    )
}