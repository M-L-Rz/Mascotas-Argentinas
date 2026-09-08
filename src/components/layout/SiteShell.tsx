import { Header, Footer } from "@/components/layout/Header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-navy text-[13px] tracking-wide text-sky-soft">
        <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] justify-between gap-3 py-2">
          <span className="opacity-90">
            Medio de mascotas en Argentina · sin recetas ni diagnósticos
          </span>
          <span className="hidden opacity-90 sm:inline">Buenos Aires</span>
        </div>
      </div>
      <Header />
      {children}
      <Footer />
    </>
  );
}
