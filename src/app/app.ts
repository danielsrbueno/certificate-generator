import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { BaseUi } from './components/base-ui/base-ui';
import { Certificate } from './services/certificate';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, BaseUi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('gerador-certificado');
  exibeNavbar: boolean = true

  constructor (private certificateService: Certificate) {}

  ngOnInit(): void {
    const storageCertficates = localStorage.getItem('certificates')
    this.certificateService.certificates = storageCertficates ? JSON.parse(storageCertficates) : []
  }
}
