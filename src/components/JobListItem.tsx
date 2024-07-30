import companyLogoPlaceholder from "@/assets/company-logo-placeholder.png";
import { formatMoney, relativeDate } from "@/lib/utils";
import { Job } from "@prisma/client";
import { Banknote, Briefcase, Clock, Globe2, MapPin } from "lucide-react";
import Image from "next/image";
import Badge from "./Badge";

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
    <article className="flex items-start gap-4 p-4 border rounded-lg">
      <Image
        src={companyLogoUrl || companyLogoPlaceholder}
        alt={`${companyName} logo`}
        width={48}
        height={48}
        className="rounded-lg"
      />
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-medium">{title}</h2>
            <p className="text-sm text-gray-500">{companyName}</p>
          </div>
          <span className="text-sm text-gray-400">{relativeDate(createdAt)}</span>
        </div>
        <div className="mt-2 text-gray-600 space-y-1">
          <p className="flex items-center text-sm">
            <MapPin size={16} className="mr-2" />
            {locationType}, {location || "Worldwide"}
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
