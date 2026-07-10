export default function ContactPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/50">
          Contact
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
          Get in touch
        </h1>
        <p className="max-w-2xl text-base leading-7 text-black/70">
          Use this page for basic contact information until you are ready to add
          a form, a map, or your preferred messaging channels.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-black/10 bg-white p-5">
          <p className="text-sm text-black/50">Email</p>
          <p className="mt-2 font-medium text-black">hello@youragency.com</p>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-5">
          <p className="text-sm text-black/50">Phone</p>
          <p className="mt-2 font-medium text-black">+84 000 000 000</p>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-5">
          <p className="text-sm text-black/50">Office</p>
          <p className="mt-2 font-medium text-black">Hanoi, Vietnam</p>
        </div>
      </section>
    </div>
  );
}