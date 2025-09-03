import { useEffect, useState } from 'react';

const useActiveSection = (ids: string[]) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let newActiveId = '';

      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop - window.innerHeight / 5 &&
            scrollPosition < offsetTop + offsetHeight - window.innerHeight / 5
          ) {
            newActiveId = id;
            break;
          }
        }
      }

      if (newActiveId && newActiveId !== activeId) {
        setActiveId(newActiveId);
        // Обновляем URL без перезагрузки страницы
        const newUrl = `#${newActiveId}`;
        window.history.replaceState(null, '', newUrl);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ids, activeId]); // Добавляем activeId в зависимости

  return activeId;
};

export default useActiveSection;
