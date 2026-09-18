# Aomori Japanese Website

## Ringkasan
Membangun situs restoran satu halaman yang premium, hangat, dan mudah dipakai, dengan identitas hijau hutan, krem, kayu alami, serta aksen emas lembut. Seluruh informasi mengikuti PRD tanpa menambahkan harga, jam, ulasan, tautan pemesanan, atau klaim yang belum terverifikasi.

## Yang akan dibangun
- Navigasi ringkas dengan menu seluler dan tombol Order Online yang siap dihubungkan saat URL resmi tersedia.
- Area pembuka sinematik dengan fotografi makanan Jepang, pesan utama, tombol menu, dan lokasi Buderim.
- Bilah informasi cepat untuk rating, jumlah ulasan, kisaran harga, lokasi, dan layanan.
- Bagian pilihan makanan berisi Takoyaki, Sushi, Korean Fried, dan Japanese Dishes tanpa harga atau bahan rekaan.
- Tentang Aomori, bagian visual bernuansa alam Jepang, galeri editorial 6–8 foto, serta menu ringkas berbasis kategori yang datanya tersedia.
- Ajakan pemesanan, lokasi dengan alamat dan tombol telepon/petunjuk arah, informasi jam buka yang aman, ringkasan rating, dan footer minimal.
- Tautan jangkar untuk Home, Menu, About, Gallery, dan Location agar semua tujuan penting tercapai dalam satu atau dua klik.
- Metadata pencarian dan data terstruktur Restaurant berdasarkan informasi yang diberikan.

## Arah visual
- Deep Forest Green `#183A2B`, Sage `#78917D`, Warm Cream `#F5F1E8`, Charcoal `#20241F`, Muted Gold `#B59A62`, Wood `#8A6A48` diterapkan sebagai token desain.
- Cormorant Garamond untuk judul dan Manrope untuk teks.
- Komposisi editorial dengan banyak ruang, garis halus, sudut tegas-lembut, tekstur washi sangat samar, dan fotografi makanan yang nyata.
- Gerak dibatasi pada kemunculan lembut, zoom foto halus, navigasi mulus, dan pergerakan latar pembuka yang lambat, dengan dukungan pengurangan animasi.

## Detail teknis
- Implementasi pada halaman utama TanStack Start dengan Tailwind CSS v4.
- Aset foto dibuat dan disimpan lokal agar konsisten serta tidak bergantung pada hotlink.
- Gambar galeri dimuat secara malas; area pembuka dioptimalkan sebagai aset utama.
- Tata letak diuji pada desktop dan seluler untuk memastikan tidak ada tumpang tindih atau gulir horizontal.
- Tombol Order Online tetap non-navigasional sampai URL resmi tersedia; petunjuk arah memakai pencarian Google Maps berdasarkan alamat yang diberikan.
