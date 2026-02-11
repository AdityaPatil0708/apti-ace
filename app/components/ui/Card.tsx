import { LucideIcon } from "lucide-react";

interface CardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    iconBgColor?: string;
    iconColor?: string;
}

export function Card({
    icon: Icon,
    title,
    description,
    iconBgColor = "bg-primary/10",
    iconColor = "text-primary"
}: CardProps) {
    return (
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className={`h-12 w-12 rounded-lg ${iconBgColor} flex items-center justify-center mb-4`}>
                <Icon className={`h-6 w-6 ${iconColor}`} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}
