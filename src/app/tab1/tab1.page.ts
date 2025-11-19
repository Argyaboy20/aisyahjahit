import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  /* ========== Constructor ========== */
  constructor(private router: Router) {}

  /* ========== Navigation Method ========== */
  /**
   * Navigates to the specified route
   * @param route - The route path to navigate to
   */
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  /* ========== WhatsApp Contact Methods ========== */
  /**
   * Opens WhatsApp for banner consultation
   * Opens in new window/tab for better user experience
   */
  contactWhatsAppBanner(): void {
    const phoneNumber = '6282370809685';
    const message = encodeURIComponent('Halo Aisyah Jahit, saya ingin berkonsultasi tentang layanan jahit.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    /* Open WhatsApp in new window */
    window.open(whatsappUrl, '_blank');
  }

  /**
   * Opens WhatsApp for product order and price inquiry
   * Opens in new window/tab for better user experience
   */
  contactWhatsAppOrder(): void {
    const phoneNumber = '6282370809685';
    const message = encodeURIComponent('Halo Aisyah Jahit, saya ingin memesan produk dan menanyakan harga. Mohon info lebih lanjut.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    /* Open WhatsApp in new window */
    window.open(whatsappUrl, '_blank');
  }

  /* ========== Lifecycle Hooks ========== */
  /**
   * Ionic lifecycle hook - called when entering the page
   * Can be used for initializing data or triggering animations
   */
  ionViewWillEnter(): void {
    /* Add any initialization logic here */
    console.log('Tab1 page loaded successfully');
  }

}