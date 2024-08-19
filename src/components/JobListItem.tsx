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
    <article className="flex items-center gap-4 rounded-md border p-4">
      <div className="flex-shrink-0">
        <Image
          src={companyLogoUrl || companyLogoPlaceholder}
          alt={`${companyName} logo`}
          width={48}
          height={48}
          className="rounded-lg"
          loading="lazy"
        />
      </div>
      <div className="flex-grow">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold">
            {title}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">{companyName}</p>
        <p className="text-sm text-muted-foreground">
          <MapPin size={14} className="mr-1 inline-block" />
          {location || "Worldwide"} ({locationType})
        </p>
        <p className="text-sm text-muted-foreground">{formatMoney(salary)}</p>
      </div>
      <div className="flex flex-col items-end text-right">
        <p className="mb-2 text-sm text-muted-foreground">{relativeDate(createdAt)}</p>
        <span className="inline-block rounded-sm border bg-muted px-2 py-1 text-sm text-muted-foreground">
          {type}
        </span>
      </div>
    </article>
  );
}
