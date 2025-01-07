export default function CardHeader({headline,children}: Readonly<{headline: string, children: React.ReactNode}|any>) {
    return (
        <div className="flex flex-row justify-between p-4 mb-4 border-b-4">
            <h2 className="text-3xl font-bold">{headline}</h2>
            {children}
        </div>
    )
}