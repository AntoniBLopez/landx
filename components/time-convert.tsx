// relativeTimeConverter.tsx
"use client"
import { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

interface Props {
  isoDate: string;
}

const RelativeTimeConverter = ({ isoDate }: Props) => {
  const [relativeTime, setRelativeTime] = useState<string>('');

  useEffect(() => {
    const updateRelativeTime = () => {
      const date = new Date(isoDate);
      setRelativeTime(formatDistanceToNow(date, { addSuffix: true }));
    };

    updateRelativeTime();
    const intervalId = setInterval(updateRelativeTime, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, [isoDate]);

  return <span className='text-xs'>{relativeTime}</span>;
};

export default RelativeTimeConverter;
