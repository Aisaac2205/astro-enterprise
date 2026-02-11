import React from "react";
import {
    Bot,
    Box,
    Cloud,
    Cpu,
    FileCheck,
    Github,
    Linkedin,
    Mail,
    Map,
    MapPin,
    PenTool,
    Phone,
    Scan,
    Share2,
    ShieldCheck,
    Twitter,
    Vault,
    Workflow,
    Zap,
} from "lucide-react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
    size?: number | string;
    color?: string;
    className?: string;
}

const ICONS: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    Bot,
    Box,
    Cloud,
    Cpu,
    FileCheck,
    Github,
    Linkedin,
    Mail,
    Map,
    MapPin,
    PenTool,
    Phone,
    Scan,
    Share2,
    ShieldCheck,
    Twitter,
    Vault,
    Workflow,
    Zap,
};

const Icon: React.FC<IconProps> = ({ name, size = 24, color = "currentColor", className, ...props }) => {
    const LucideIcon = ICONS[name];

    if (!LucideIcon) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    return <LucideIcon size={size} color={color} className={className} {...props} />;
};

export default Icon;
