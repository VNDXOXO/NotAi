'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { X } from 'lucide-react';
import Form from 'next/form'

const SearchForm = ({ query }: { query ?: string }) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState(query || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchText.trim()) return;

    // Redirect with query param
    router.push(`/?query=${encodeURIComponent(searchText)}`);
  };

  const Reset = () => {
    setSearchText('');
    router.push('/'); // Optionally reset the URL
  };
  return (
    <Form action="/" onSubmit={handleSubmit} className="search-form">
      <input
        name="query"
        className="search-input"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="flex gap-2">
        {searchText && (<button type="reset"  className="search-btn text-white" onClick={Reset}>
        <X/>
        </button>)}
        <button type="submit" className="search-btn">
          <Search className="text-white" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
