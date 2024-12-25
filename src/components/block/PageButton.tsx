"use client"

export default function PageButton({ label, onClick, disabled }: { label: string, onClick: VoidFunction, disabled:boolean }) {
    return (
        <button
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 hover:disabled:bg-gray-300 rounded-xl shadow-lg disabled:shadow-none disabled:opacity-20 transition-all"
            onClick={onClick}
            disabled={disabled}
            >
            {label}
        </button>
    )
}