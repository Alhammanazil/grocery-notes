export default function Footer({ items }) {
  if (items.length === 0) {
    return <footer className="stats">Daftar Belanja Masih Kosong</footer>;
  }

  const totalItems = items.length;
  const totalBought = items.filter((item) => item.checked).length;
  const percentage = Math.round((totalBought / totalItems) * 100);
  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanja, {totalBought} barang sudah
      dibeli ({percentage}%)
    </footer>
  );
}
