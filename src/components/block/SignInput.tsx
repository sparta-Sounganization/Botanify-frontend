export default function SignInput({type, label, placeholder}:{type:string, label:string, placeholder:string}) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
            />
        </div>
    )
}