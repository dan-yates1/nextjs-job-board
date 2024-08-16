import companyLogoPlaceholder from "@/assets/company-logo-placeholder.png";
import { formatMoney, relativeDate } from "@/lib/utils";
import { Job } from "@prisma/client";
import { Banknote, MapPin } from "lucide-react";
import Image from "next/image";

interface JobListItemProps {
  job: Job;
}

export default function JobListItem({
  job: {
    title,
    companyName,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
    createdAt,
  },
}: JobListItemProps) {
  return (
    <article className="flex flex-col sm:flex-row items-center gap-4 rounded-lg border p-4">
    <div className="flex-shrink-0">
      <Image
        src={companyLogoUrl || companyLogoPlaceholder}
        alt={`${companyName} logo`}
        width={70}
        height={70}
        className="rounded-lg"
        loading="lazy"
      />
    </div>
    <div className="flex-grow w-full">
      <div className="flex flex-col sm:flex-row justify-between w-full">
        <div>
          <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2">
            {title}
            <span className={`text-xs sm:text-sm px-2 py-1 rounded-full text-white ${
              locationType === 'Remote'
                ? 'bg-green-500'
                : locationType === 'Hybrid'
                ? 'bg-yellow-500'
                : 'bg-blue-500'
            }`}>
              {locationType}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            {companyName}
          </p>
        </div>
        <span className="text-sm sm:text-base text-muted-foreground sm:mt-0 mt-2 sm:order-2 order-1">
          {relativeDate(createdAt)}
        </span>
      </div>
      <div className="mt-2 space-y-1 text-muted-foreground">
        <p className="flex items-center text-sm sm:text-base">
          <MapPin size={16} className="mr-2" />
          {location || 'Worldwide'}
        </p>
        <p className="flex items-center text-sm sm:text-base">
          <Banknote size={16} className="mr-2" />
          {formatMoney(salary)}
        </p>
      </div>
    </div>
  </article>
  );
}
