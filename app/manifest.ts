import type { MetadataRoute } from "next";
import { SITE_NAME } from "./lib/constants";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description:
      "Tecnologia médico-hospitalar de excelência para cardiologia, há mais de 25 anos.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#336B41",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
