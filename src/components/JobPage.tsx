import { formatMoney, relativeDate } from "@/lib/utils";
import { Job } from "@prisma/client";
import { Banknote, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "./Markdown";

interface JobPageProps {
  job: Job;
}

export default function JobPage({
  job: {
    title,
    description,
    companyName,
    applicationUrl,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
  },
}: JobPageProps) {
  return (
    <section className="w-full grow space-y-5">
      <div className="flex items-center gap-3">
        {companyLogoUrl && (
          <Image
            src={companyLogoUrl}
            alt="Company logo"
            width={100}
            height={100}
            className="rounded-xl"
          />
        )}
        <div>
          <div>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="font-semibold">
              {applicationUrl ? (
                <Link
                  href={new URL(applicationUrl).origin}
                  className="text-primary hover:underline"
                >
                  {companyName}
                </Link>
              ) : (
                <span>{companyName}</span>
              )}
            </p>
          </div>
          <div className="text-muted-foreground">
            <div className="flex-grow">
              <div className="flex items-start justify-between"></div>
              <div className="mt-2 space-y-1 text-muted-foreground">
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
          </div>
        </div>
      </div>
      <div>
        {description && <Markdown>{description}</Markdown>}
      </div>
    </section>
  );
}
