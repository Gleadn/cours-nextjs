import { ButtonLink } from "@/components/ui/ButtonLink";
import Title from "@/components/ui/Title";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-8 px-6 py-32">
      <p className="text-8xl font-bold tracking-tighter">404</p>
      <Title
        tag="h1"
        topLine="Oops !"
        bottomLine="La page que vous cherchez n'existe pas ou a été déplacée."
      >
        Page introuvable
      </Title>
      <ButtonLink href="/websites" variant="filled" color="dark">
        Retour aux sites web
      </ButtonLink>
    </div>
  );
}
