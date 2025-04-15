// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://build.withYHR.com",
  integrations: [
    starlight({
      components: {
        Head: "./src/components/Head.astro",
      },
      title: "Build withYHR",
      logo: {
        dark: "./src/assets/logo-dark.svg",
        light: "./src/assets/logo-light.svg",
        alt: "withYHR Logo",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/yaralahruthik/build-with-yhr",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/qyjMPHq8",
        },
      ],
      sidebar: [
        {
          slug: "introduction",
        },
      ],
    }),
  ],
});
