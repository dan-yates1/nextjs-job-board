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
    <article className="flex items-center gap-4 rounded-lg border p-4">
      <Image
        src={companyLogoUrl || companyLogoPlaceholder}
        alt={`${companyName} logo`}
        width={70}
        height={70}
        className="rounded-lg"
      />
      <div className="flex-grow">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-medium">{title}</h2>
            <p className="text-sm text-gray-500">{companyName}</p>
          </div>
          <span className="text-sm text-gray-400">
            {relativeDate(createdAt)}
          </span>
        </div>
        <div className="mt-2 space-y-1 text-gray-600">
          <p className="flex items-center text-sm">
            <MapPin size={16} className="mr-2" />
            {location || "Worldwide"} ({locationType})
          </p>
          <p className="flex items-center text-sm">
            <Banknote size={16} className="mr-2" />
            {formatMoney(salary)}
          </p>
        </div>
      </div>
    </article>
  );
}
