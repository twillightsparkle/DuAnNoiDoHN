export default function ContactPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/50">
          Contact
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
          Liên hệ
        </h1>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white p-5">
          <p className="text-sm text-black/50">Phone</p>
          <p className="mt-2 font-medium text-black">0984 704 988</p>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-5">
          <p className="text-sm text-black/50">Office</p>
          <p className="mt-2 font-medium text-black">Hanoi, Vietnam</p>
        </div>
      </section>
    </div>
  );
}