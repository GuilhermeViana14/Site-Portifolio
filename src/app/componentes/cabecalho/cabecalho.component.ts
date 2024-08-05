import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent{

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Carregar o script toggleNavbar.js
    const script = this.renderer.createElement('script');
    script.src = 'assets/toggleNavbar.js';
    this.renderer.appendChild(document.body, script);
  }

  callToggleNavbar() {
    // Chamar a função toggleNavbar definida no script
    (window as any).toggleNavbar();
  }
}
