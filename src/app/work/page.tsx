import { ProjectArchive } from "@/components/archive/ProjectArchive";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Work Archive — Rashi Chaurasia",
  description: "Complete professional archive of Product Design, UX Research, Enterprise Systems, and Visual Craft by Rashi Chaurasia.",
};

export default function WorkArchivePage() {
  return <ProjectArchive />;
}
