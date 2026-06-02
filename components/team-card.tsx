import type { Member } from "@/lib/content";

export function TeamCard({ member }: { member: Member }) {
  return (
    <article className="card-lift flex h-full flex-col gap-5 bg-card p-7 hover:bg-card/80">
      <div className="flex items-center gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center border border-[var(--gold)]/30 font-serif text-sm font-medium text-[var(--gold)]">
          {member.initials}
        </div>
        <div>
          <h3 className="font-medium tracking-tight">{member.name}</h3>
          <p className="text-xs text-[var(--gold)] mt-0.5">{member.experience}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <p className="text-sm font-medium text-muted-foreground">{member.role}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground/80">
          {member.bio}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 border-t border-border pt-4">
        {member.focus.map((f) => (
          <span key={f} className="border border-border px-2 py-0.5 text-[0.65rem] uppercase tracking-wider text-muted-foreground">
            {f}
          </span>
        ))}
      </div>
    </article>
  );
}
