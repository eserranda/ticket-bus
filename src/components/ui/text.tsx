import { cn } from "@/lib/utils";

const Title = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <h2 className={cn("text-2xl md:text-3xl font-bold text-shop_btn_dark_green capitalize tracking-wide font-sans", className)}>
            {children}
        </h2>
    )
}

const SubTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <h2 className={cn("font-semibold text-black font-sans", className)}>
            {children}
        </h2>
    )
}

const SubText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <p className={cn("text-sm text-gray-600", className)}>
            {children}
        </p>
    )
}

export { Title, SubTitle, SubText };