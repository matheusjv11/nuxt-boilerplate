import { NuxtPage } from "@nuxt/schema";

export const routes = (pages: NuxtPage[]) => {
  pages.push(
    {
      name: "Página Inicial",
      path: "/",
      file: "@/shared/presentation/pages/home.vue",
    },
    {
      name: "Usuário aleatório",
      path: "/random-users",
      file: "@/random-users/presentation/pages/list-page.vue",
    },
  );
};
