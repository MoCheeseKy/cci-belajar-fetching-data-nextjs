import { useState } from 'react';
import { useRouter } from 'next/router';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import Input from '@/components/forms/Input';
import Button from '@/components/_shared/Button';

export default function AddMahasiswa() {
  const { push } = useRouter();
  const [FormData, setFormData] = useState({
    nama: '',
    nim: '',
    kelas: '',
    jurusan: '',
    fakultas: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    console.log('Form Data:', FormData);
  }
  return (
    <main
      className={`${inter.className} min-h-screen flex flex-col bg-gradient-to-r from-[#0f172a] to-[#1e293b] py-6 px-12`}
    >
      <div className='flex flex-col gap-4 max-w-[444px]'>
        <Input placeholder='Input Nama' onChange={handleChange} name='nama' />
        <Input placeholder='Input NIM' onChange={handleChange} name='nim' />
        <Input placeholder='Input Kelas' onChange={handleChange} name='kelas' />
        <Input
          placeholder='Input Fakultas'
          onChange={handleChange}
          name='fakultas'
        />
        <Input
          placeholder='Input Jurusan'
          onChange={handleChange}
          name='jurusan'
        />
        <div className='flex justify-end gap-4 mt-4'>
          <Button text='Cancel' onClick={() => push('/mahasigma')} />
          <Button
            text='+ Tambah Data'
            onClick={(e) => handleSubmit(e)}
            type='submit'
          />
        </div>
      </div>
    </main>
  );
}
