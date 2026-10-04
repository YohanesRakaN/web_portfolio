import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ExperienceCard({ image, title, comp, desc, periode, isDarkMode }) {
  return (
    <Card size="sm" className={`w-full mb-3 ${isDarkMode ? 'bg-surface' : 'bg-on-surface'} hover:scale-105 duration-300 ease-in-out `}>
      <div className="flex items-stretch p-5">
        {/* Logo di Kiri - dengan margin agar tidak menempel border */}
        <div className="flex-shrink-0 flex items-center">
          <div className="overflow-hidden rounded-xl">
            <img width={80} height={80} src={image} alt={title} className="object-cover" />
          </div>
        </div>

        {/* Teks di Kanan - menumpuk vertikal */}
        <div className="flex flex-col justify-center ml-5 flex-1">
          <CardTitle className={isDarkMode ? 'text-white' : 'text-white'}>
            {title} ({periode})
          </CardTitle>
          <CardDescription className={isDarkMode ? 'text-gray-300' : 'text-gray-300'}>
            {comp}
          </CardDescription>
          <p className={`mt-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-200'}`}>
            {desc}
          </p>
        </div>
      </div>
    </Card>
  );
}