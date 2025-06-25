interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className="w-full py-4 pt-10 sticky top-0 left-0 right-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 z-20">
      <p className="text-gray-100 text-sm lg:text-base font-semibold tracking-wider">
        {title}
      </p>
    </div>
  );
}
