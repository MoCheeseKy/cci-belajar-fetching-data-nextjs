import Button from '../Button';

export default function MahasiswaCard({
  nama,
  nim,
  kelas,
  fakultas,
  jurusan,
  id,
  deleteData,
  updateData,
}) {
  return (
    <div className='p-4 bg-white rounded-lg'>
      <p className='mb-2 text-xl font-bold'>{nama}</p>
      <hr className='my-2' />
      <p className='text-base'>
        {nim}, {kelas}
      </p>
      <p className='text-base'>
        {fakultas}, {jurusan}
      </p>
      <div className='flex justify-end gap-2 mt-2'>
        <Button text={'Hapus'} onClick={() => deleteData(id)} />
        <Button
          text={'Edit'}
          onClick={() => updateData(`mahasiswa/ubah/${id}`)}
        />
      </div>
    </div>
  );
}
