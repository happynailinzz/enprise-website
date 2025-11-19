
import { LucideIcon } from "lucide-react";

export interface NavItem {
    label: string;
    href: string;
}

export interface DomainItem {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface Partner {
    name: string;
    url: string;
    width: string;
    isText?: boolean;
}

export interface FeatureItem {
    id: number;
    title: string;
    description: string;
    icon?: LucideIcon;
}

export interface ContactFormData {
    name: string;
    company: string;
    phone: string;
    interest: string;
}

export interface CaseStudy {
    id: string;
    title: string;
    category: string;
    description: string;
    imageColor: string; // Placeholder color for image
    tags: string[];
}

export interface NewsItem {
    id: string;
    title: string;
    date: string;
    summary: string;
    category: string;
    imageUrl?: string;
}
