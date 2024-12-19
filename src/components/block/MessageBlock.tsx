export default function MessageBlock({ message }: { message: string }) {
    return (
        <h1 className="text-2xl text-center my-8">
            {message}
        </h1>
    )
}