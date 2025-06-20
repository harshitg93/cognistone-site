export function Button({ children, className = '', size = 'md' }) {
  const sizeClass = size === 'lg' ? 'py-3 px-6 text-lg' : 'py-2 px-4 text-sm';
  return <button className={`rounded-full font-medium ${sizeClass} ${className}`}>{children}</button>;
}
