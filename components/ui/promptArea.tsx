'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Form from 'next/form'
import { Textarea } from './textarea';
import { Button } from './button';
import { ChevronRight } from "lucide-react"

const PromptArea = ({ query }: { query ?: string }) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState(query || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchText.trim()) return;

    router.push(`/result/?query=${encodeURIComponent(searchText)}`);
  };

  const Reset = () => {
    setSearchText('');
    router.push('/'); 
  };
  return (
    <Form action="/" onSubmit={handleSubmit}>
      <Textarea className="" placeholder="generate non ai image" name='query' value={searchText}
        onChange={(e) => setSearchText(e.target.value)}></Textarea>
      <Button type="submit" className='bg-secondary hover:bg-secondary/90 text-primary variant="outline" size="icon"'> <ChevronRight /></Button>
    </Form>
  );
};

export default PromptArea;
