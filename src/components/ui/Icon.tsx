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
    ShoppingCart,
    Globe,
    type LucideProps,
} from "lucide-react";

interface IconProps extends LucideProps {
    name: string;
}

const ICONS: Record<string, React.FC<LucideProps>> = {
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
    ShoppingCart,
    Globe,
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
