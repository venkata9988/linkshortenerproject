import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 text-zinc-50">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500 text-lg font-bold text-white">
            L
          </div>
          <span className="text-xl font-semibold tracking-tight">LinkShortener</span>
        </div>

        <div className="flex items-center gap-3">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button variant="outline" className="rounded-full border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-800">
                Sign in
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button className="rounded-full bg-violet-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-400">
                Sign up
              </Button>
            </SignUpButton>
          </Show>

          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </header>

      <section className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 pb-16 pt-12 lg:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-violet-500/35 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-200">
              Built for faster sharing
            </div>

            <div className="space-y-5">
              <h1 className="max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Turn long links into short, memorable ones.
              </h1>
              <p className="max-w-lg text-lg leading-8 text-zinc-300">
                Create clean, trackable links in seconds. Sign in to manage your links,
                protect your workspace, and share what matters most.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Show when="signed-out">
                <SignUpButton mode="modal">
                  <Button className="rounded-full bg-violet-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400">
                    Get started
                  </Button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-base font-medium text-emerald-200">
                  You are signed in and ready to go.
                </div>
              </Show>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm">
            <div className="space-y-5">
              <div className="flex items-center justify-between text-sm text-zinc-300">
                <span>Short URL</span>
                <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs uppercase tracking-[0.2em] text-violet-200">
                  Live
                </span>
              </div>

              <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/70 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Original
                </div>
                <p className="mt-3 break-all text-sm text-zinc-200">
                  https://example.com/very/long/url/that/needs/shortening
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-zinc-950 p-4">
                <span className="text-sm text-zinc-400">short.ly/</span>
                <span className="text-lg font-semibold text-white">demo-link</span>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                <div className="rounded-2xl bg-zinc-800 p-3">
                  <div className="text-2xl font-bold text-white">12k</div>
                  <div className="text-xs text-zinc-400">Clicks</div>
                </div>
                <div className="rounded-2xl bg-zinc-800 p-3">
                  <div className="text-2xl font-bold text-white">4.8</div>
                  <div className="text-xs text-zinc-400">Rating</div>
                </div>
                <div className="rounded-2xl bg-zinc-800 p-3">
                  <div className="text-2xl font-bold text-white">99%</div>
                  <div className="text-xs text-zinc-400">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
