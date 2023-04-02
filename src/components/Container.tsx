import { cn } from '@/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = '', ...props }: Props) => {
  return (
    <div className={cn('w-10/12 max-w-6xl mx-auto', className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
