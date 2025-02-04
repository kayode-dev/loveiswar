const thisYear = new Date().getFullYear();
export const Footer = () => {
  return (
    <footer className="p-4 border-t border-t-red-700 font-[family-name:var(--font-unifraktur-maguntia)] text-center">
      <p>&copy; {thisYear} LOVE IS WAR</p>
    </footer>
  );
};
