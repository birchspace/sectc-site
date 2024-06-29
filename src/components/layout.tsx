interface ProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 z-20 h-[calc(95dvh+3px)] w-[calc(90dvw+3px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-tr from-transparent to-[#898989]/50 blur-[2px] transition-all lg:h-[calc(80dvh+3px)] lg:w-[calc(80dvw+3px)]" />
      <main className="overflow-hidde z-30 flex min-h-screen w-screen justify-center py-[5vh] transition-all duration-300 ease-linear">
        <section className="flex h-[95dvh] flex-col overflow-hidden rounded-2xl bg-gradient-to-tr from-[#080808] to-[#242424] text-[#898989]/90 transition-all lg:h-[80dvh] lg:w-[80dvw]">
          {children}
        </section>
      </main>
      <div
        className="absolute left-0 top-0 z-20 h-full w-full rounded-2xl bg-gradient-to-tr from-[#010101] to-[#242424] antialiased opacity-[4%] duration-300 ease-linear"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="grid-pattern absolute left-0 top-0 h-full w-full" />
    </>
  );
}
