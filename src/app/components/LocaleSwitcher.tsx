import { useRouter, usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as string;

  const handleLocaleChange = () => {
    const newLocale = locale === 'en' ? 'es' : 'en';

    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);

    router.push(newPath);
  };

  return (
    <div>
      <button
        onClick={handleLocaleChange}
        className="btn bg-transparent hover:bg-pink-500 text-black border-pink-500"
      >
        {locale === 'en' ? 'Español' : 'English'}
      </button>
    </div>
  );
};

export default LocaleSwitcher;
