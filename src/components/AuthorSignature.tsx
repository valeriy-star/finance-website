import Image from 'next/image';

export function AuthorSignature() {
  return (
    <div className="mt-14 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
      <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden bg-brand ring-1 ring-slate-200 flex-shrink-0">
        <Image
          src="/images/valeriy-kosovan-article-signature.svg"
          alt="Valeriy Kosovan"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <p className="font-display text-xl text-brand-ink tracking-tight">Valeriy Kosovan</p>
        <p className="text-sm text-brand-slate font-medium">
          Finance Executive · CFO · Finance Transformation & International Structuring
        </p>
        <p className="mt-2 text-sm text-brand-ink/80 leading-relaxed max-w-2xl">
          Valeriy writes about practical finance transformation, ERP implementation, SaaS economics and
          international business structures based on hands-on CFO experience in fast-growing technology
          and operational businesses.
        </p>
      </div>
    </div>
  );
}
