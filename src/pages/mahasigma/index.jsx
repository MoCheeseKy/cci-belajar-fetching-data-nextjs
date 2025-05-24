import { useRouter } from 'next/router';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import Button from '@/components/_shared/Button';
import MahasiswaCard from '@/components/_shared/MahasigmaCard';

export default function Mahasiswa() {
  const { push } = useRouter();
  return (
    <main
      className={`${inter.className} min-h-screen flex flex-col bg-gradient-to-r from-[#0f172a] to-[#1e293b] py-6 px-12`}
    >
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold text-white'>Data Mahasiswa</h1>
          <p className='mt-2 text-gray-300'>
            Data mahasiswa yang terdaftar di sistem
          </p>
        </div>
        <Button
          text={'+ Tambah Mahasigma'}
          onClick={() => push('mahasigma/add')}
        />
      </div>
      <div className='grid grid-cols-3 gap-4 mt-6'>
        <MahasiswaCard
          id={1}
          nama={'John Doe'}
          nim={'123456789'}
          kelas={'TI-1A'}
          fakultas={'Teknik Informatika'}
          jurusan={'Sistem Informasi'}
          deleteData={() => console.log('Delete')}
          updateData={() => console.log(`Update to 1`)}
        />
      </div>
    </main>
  );
}
