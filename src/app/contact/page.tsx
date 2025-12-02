"use client";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16 space-y-8">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="relative h-14 w-14">
            <Image src="/logo/logo.png" alt="TravelBare logo" fill sizes="56px" className="object-contain" priority />
          </div>
          <div>
            <p className="text-sm uppercase tracking-wide text-amber-700">TravelBare</p>
            <h1 className="text-4xl font-bold">Contact</h1>
          </div>
        </div>
        <p className="text-muted-foreground text-lg text-center max-w-2xl">
          We would love to hear from you. Reach out for bookings, questions, or custom Kashmir &amp; Umrah packages.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <ContactCard title="Email" value="travelbareofficial@gmail.com" icon="✉️" />
        <ContactCard title="Phone" value="+91 6006031751" icon="📞" />
        <ContactCard title="Location" value="Srinagar, Kashmir" icon="📍" />
      </div>
    </main>
  );
}

function ContactCard({ title, value, icon }: { title: string; value: string; icon: string }) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-2 text-amber-700 text-lg font-semibold">
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      <p className="mt-2 text-sm text-foreground">{value}</p>
    </div>
  );
}
