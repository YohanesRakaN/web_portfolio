import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PrimaryButton from "./PrimaryButton";
import { TechBadge } from "./TechBadge";

// Tambahkan isDarkMode di destructuring props
export function ProjectCard({ link, action, title, desc, type, image, tech, isDarkMode, ...props }) {
  return (
    <Card className="relative w-full flex flex-col md:flex-row overflow-hidden p-0">
      {/* Gambar di Kiri */}
      <div className="w-full md:w-2/5 h-48 md:h-auto md:min-h-[280px] relative overflow-hidden">
        <img
          src={image}
          alt="Project cover"
          className="absolute inset-0 w-full h-full object-cover brightness-60 dark:brightness-90"
        />
      </div>

      {/* Konten di Kanan */}
      <div className="flex-1 flex flex-col p-6">
        <CardHeader className="p-0 mb-4">
          <CardAction className="mb-3 flex justify-end">
            <Badge className="text-[15px] bg-secondary-container">
              {type}
            </Badge>
          </CardAction>
          <CardTitle className="heading-4 mb-2">{title}</CardTitle>
          <CardDescription>
            <div className="text-body mb-3">{desc}</div>
            <div className="flex flex-wrap gap-2">
              {tech.map((item, index) => (
                // Oper isDarkMode ke TechBadge
                <TechBadge key={index} isDark={isDarkMode}>
                  {item}
                </TechBadge>
              ))}
            </div>
          </CardDescription>
        </CardHeader>

        <CardFooter className="p-0 mt-auto pt-4">
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex-1">
            <PrimaryButton className="w-full">{action}</PrimaryButton>
          </a>
        </CardFooter>
      </div>
    </Card>
  );
}