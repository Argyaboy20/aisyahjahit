import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  openImage(index: number) {
    // Implementasi untuk membuka gambar dalam modal atau lightbox
    console.log('Opening image at index:', index);
    // Anda bisa menambahkan modal viewer di sini jika diperlukan
  }

  contactWhatsApp() {
    const phoneNumber = '6281234567890'; // Ganti dengan nomor WhatsApp yang sesuai
    const message = 'Halo, saya tertarik dengan hasil karya Aisyah Jahit. Saya ingin konsultasi.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

}